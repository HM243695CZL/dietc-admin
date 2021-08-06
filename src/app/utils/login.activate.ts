import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {StorageUtil} from './storage.util';

/**
 * 全局路由拦截
 */
@Injectable()
export class LoginActivate implements CanActivate{

  constructor(
    private route: Router
  ){ }

  /**
   * @param route route
   * @param state state
   * @return 返回true或false true允许进入路由 false不允许进入路由
   */
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> | boolean | UrlTree {
    /**
     * 通过有无token判断是否已经登录
     */
    const token = StorageUtil.getSession('token');
    if(token) {
      return true;
    } else {
      this.route.navigate(['/login']);
      return false;
    }
  }

}
