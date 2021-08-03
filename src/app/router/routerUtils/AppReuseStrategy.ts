/**
 * 路由复用策略
 */
import {ActivatedRouteSnapshot, DetachedRouteHandle, Route, RouteReuseStrategy} from '@angular/router';
import {Injectable} from '@angular/core';

interface IRouteConfigData {
  reuse: boolean;
}
interface ICachedRoute {
  handle: DetachedRouteHandle;
  data: IRouteConfigData;
}

@Injectable()
export class AppReuseStrategy implements  RouteReuseStrategy {

  private static routeCache = new Map<string, ICachedRoute>();
  private static waitDelete: string; // 当前页未进行存储时需要删除
  private static currentDelete: string;  // 当前页存储过时需要删除

  /**
   * 删除路由快照
   */
  public static deleteRouteSnapshot(url: string): void {
    if (url[0] === '/') {
      url = url.substring(1);
    }
    url = url.replace('/', '_');
    if (AppReuseStrategy.routeCache.has(url)) {
      AppReuseStrategy.routeCache.delete(url);
      AppReuseStrategy.currentDelete = url;
    } else {
      AppReuseStrategy.waitDelete = url;
    }
  }

  /**
   * 重置路由策略数据
   */
  public static resetCache(): void {
    this.routeCache.forEach((value, key) => {
      AppReuseStrategy.routeCache.delete(key);
    });
  }

  /** 从缓存中获取快照，若无则返回null */
  retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle | null {
    const url = this.getFullRouteUrl(route);
    const data = this.getRouteData(route);
    return data && AppReuseStrategy.routeCache.has(url)
      // @ts-ignore
      ? AppReuseStrategy.routeCache.get(url).handle
      : null;
  }

  /** 若 path 在缓存中有的都认为允许还原路由 */
  shouldAttach(route: ActivatedRouteSnapshot): boolean {
    const url = this.getFullRouteUrl(route);
    return AppReuseStrategy.routeCache.has(url);
  }

  /** 表示对所有路由允许复用 如果你有路由不想利用可以在这加一些业务逻辑判断 */
  shouldDetach(route: ActivatedRouteSnapshot): boolean {
    const data = this.getRouteData(route);
    return !!data;
  }

  /** 进入路由触发，判断是否同一路由 */
  shouldReuseRoute(future: ActivatedRouteSnapshot, curr: ActivatedRouteSnapshot): boolean {
    return future.routeConfig === curr.routeConfig;
  }

  /** 当路由离开时会触发。按path作为key存储路由快照&组件当前实例对象 */
  store(route: ActivatedRouteSnapshot, handle: DetachedRouteHandle): void {
    const url = this.getFullRouteUrl(route);
    const data = this.getRouteData(route);
    if (AppReuseStrategy.waitDelete && AppReuseStrategy.waitDelete === url) {
      // 如果待删除的是当前路由，且未存储过则不存储快照
      AppReuseStrategy.waitDelete = '';
      return;
    } else {
      // 如果待删除的是当前路由，且存储过则不存储快照
      if (AppReuseStrategy.currentDelete && AppReuseStrategy.currentDelete === url) {
        AppReuseStrategy.currentDelete = '';
        return;
      } else {
        AppReuseStrategy.routeCache.set(url, {handle, data});
        this.addRedirectRecursively(route);
      }
    }
  }

  private getFullRouteUrl(route: ActivatedRouteSnapshot): string {
    return this.getFullRouteUrlPaths(route).filter(Boolean).join('/').replace('/', '_');
  }

  private getFullRouteUrlPaths(route: ActivatedRouteSnapshot): string[] {
    const paths = this.getRouteUrlPaths(route);
    return route.parent ? [...this.getFullRouteUrlPaths(route.parent), ...paths] : paths;
  }

  private getRouteUrlPaths(route: ActivatedRouteSnapshot): string[] {
    return route.url.map(urlSegment => urlSegment.path);
  }

  private getRouteData(route: ActivatedRouteSnapshot): IRouteConfigData {
    // @ts-ignore
    return route.routeConfig && route.routeConfig.data as IRouteConfigData;
  }

  private addRedirectRecursively(route: ActivatedRouteSnapshot): void {
    const config = route.routeConfig;
    if (config) {
      if (!config.loadChildren) {
        const routeFirstChild = route.firstChild;
        const routeFirstChildUrl = routeFirstChild ? this.getRouteUrlPaths(routeFirstChild).join('/') : '';
        const childConfigs = config.children;
        if (childConfigs) {
          const childConfigWithRedirect = childConfigs.find(c => c.path === '' && !! c.redirectTo);
          if (childConfigWithRedirect) {
            childConfigWithRedirect.redirectTo = routeFirstChildUrl;
          }
        }
      }
      route.children.forEach(childRoute => this.addRedirectRecursively(childRoute));
    }
  }

}