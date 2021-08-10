import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {NzContextMenuService, NzDropdownMenuComponent} from 'ng-zorro-antd/dropdown';
import {select, Store} from '@ngrx/store';
import {CounterAction} from '../store/actions';
import {AppReuseStrategy} from '../router/routerUtils/AppReuseStrategy';
import {StorageUtil} from '../utils/storage.util';

interface AppStore {
  ui: any;
}

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.less']
})


export class PagesComponent implements OnInit{
  currentPath: string | undefined;
  tagList: any;
  menuList: any;
  constructor(
    private router: Router,
    private nzContextMenuService: NzContextMenuService,
    private store: Store<AppStore>,
    private action: CounterAction
  ) {
    // 注入store
    const stream = store.pipe(select('ui'));
    // 从app.module.ts获取count状态流
    stream.subscribe(res => {
      const {tagList, menuList, currentPath} = res;
      this.currentPath = currentPath;
      this.tagList = tagList;
      this.menuList = menuList;
    });
  }

  isCollapsed = false;
  ngOnInit() {
    this.initTagList();
  }

  /**
   * 添加标签
   * @param url url
   */
  addTagList(url: any): void {
    this.store.dispatch(this.action.AddTagList(url));
  }

  /**
   * 关闭当前标签
   */
  cutTagList(url: any): void {
    // 删除路由快照
    AppReuseStrategy.deleteRouteSnapshot(url);
    this.store.dispatch(this.action.CutTagList(url));
    const length = this.tagList.length;
    // 关闭最后一个标签后，跳转到首页
    if (length === 0) {
      this.router.navigate(['/pages/home']);
      this.addTagList('/pages/home');
      this.changeCurrentPath('/pages/home');
    }
    // 如果关闭的是当前页，则跳转到最后一个标签
    if (url === this.currentPath) {
      this.router.navigate([this.tagList[length - 1].url]);
      this.changeCurrentPath(this.tagList[length - 1].url)
    }
  }

  /**
   * 关闭其他标签
   */
  cutOtherTagList(url: any): void {
    // 清除路由快照
    AppReuseStrategy.resetCache();
    if (this.currentPath !== url) {
      // 说明需要选中url标签
      this.router.navigate([url]);
      this.changeCurrentPath(url);
    }
    this.store.dispatch(this.action.CutOtherTagList(url));
  }

  /**
   * 关闭所有标签
   */
  emptyTagList(): void {
    // 清除路由快照
    AppReuseStrategy.resetCache();
    this.store.dispatch(this.action.EmptyTagList());
    this.router.navigate(['/pages/home']);
    this.changeCurrentPath('/pages/home');
    this.addTagList('/pages/home');
  }

  /**
   * 初始化标签
   */
  initTagList(): void {
    this.menuList.map((item: { children: any[]; }) => {
      (item.children || []).map(ele => {
        if(ele.url === this.currentPath) {
          this.addTagList(ele.url);
        }
      });
    });
  }

  /**
   * 点击鼠标右键
   * @param $event event
   * @param menu menu
   */
  contextMenu($event: MouseEvent, menu: NzDropdownMenuComponent): void {
    this.nzContextMenuService.create($event, menu);
  }

  /**
   * 点击标签
   * @param item item
   */
  chooseTag(item: any): void {
    const url = item.url.split('?')[0];
    const params = item.url.split('?')[1];
    if(params) {
      // 表示点击的是详情页标签
      /**
       * 注：相同组件的详情页之间的跳转，需要一个路由作为过渡切换
       * 最好是使用一个没有任何请求的简单页面或不存在的路由
       */
      this.router.navigate(['/pages/temp']);
      setTimeout(() => {
        this.router.navigate([url, params]);
      }, 10);
    } else {
      this.router.navigate([url]);
    }
    this.changeCurrentPath(item.url);
  }

  /**
   * 跳转页面
   * @param item item
   */
  goToDetailMenu(item: any): void {
    this.chooseTag(item);
    this.addTagList(item.url);
  }

  /**
   * 退出登录
   */
  logOut():void {
    StorageUtil.clearLocal();
    StorageUtil.clearSession();
    AppReuseStrategy.resetCache();
    AppReuseStrategy.deleteRouteSnapshot('/pages/home');
    this.emptyTagList();
    this.router.navigate(['/login']);
  }

  /**
   * 更新当前地址
   * @param url url
   */
  changeCurrentPath(url: any) {
    this.store.dispatch(this.action.ChangeCurrPath(url));
  }
}
