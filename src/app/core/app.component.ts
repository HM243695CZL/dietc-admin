import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import { NzDropdownMenuComponent, NzContextMenuService} from 'ng-zorro-antd/dropdown';
import {Store, select} from '@ngrx/store';
import {CounterAction} from '../store/actions';
import {AppReuseStrategy} from '../router/routerUtils/AppReuseStrategy';

interface AppStore {
  count: any;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit{
  tagList: any;
  menuList: any;
  constructor(
    private router: Router,
    private nzContextMenuService: NzContextMenuService,
    private store: Store<AppStore>,
    private action: CounterAction
  ) {
    // 注入store
    const stream = store.pipe(select('count'));
    // 从app.module.ts获取count状态流
    stream.subscribe(res => {
      const {tagList, menuList} = res;
      this.tagList = tagList;
      this.menuList = menuList;
    });
  }

  isCollapsed = false;
  currentPath = location.pathname;

  ngOnInit(): void {
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
      this.currentPath = '/pages/home';
    }
    // 如果关闭的是当前页，则跳转到最后一个标签
    if (url === this.currentPath) {
      this.router.navigate([this.tagList[length - 1].url]);
      this.currentPath = this.tagList[length - 1].url;
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
      this.currentPath = url;
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
    this.currentPath = '/pages/home';
    this.addTagList('/pages/home');
  }

  /**
   * 初始化标签
   */
  initTagList(): void {
    this.menuList.map((item: { url: string; }) => {
      if (item.url === this.currentPath) {
        this.addTagList(item.url);
      }
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
    this.router.navigate([item.url]);
    this.currentPath = item.url;
  }

  /**
   * 跳转页面
   * @param item item
   */
  goToDetailMenu(item: any): void {
    this.chooseTag(item);
    this.addTagList(item.url);
    console.log(AppReuseStrategy.resetCache());
  }

}
