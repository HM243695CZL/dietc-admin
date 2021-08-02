import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import { NzDropdownMenuComponent, NzContextMenuService} from 'ng-zorro-antd/dropdown';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit{
  constructor(
    private router: Router,
    private nzContextMenuService: NzContextMenuService
  ) {}

  isCollapsed = false;
  currentPath = location.pathname;
  menuList = [
    {
      title: '首页',
      url: '/pages/home',
      key: 1,
      icon: 'fa fa-cc',
      checkStatus: false
    },
    {
      title: '测试',
      url: '/pages/test',
      key: 2,
      icon: 'fa fa-cc',
      checkStatus: false
    }
  ];
  tagList = [
    {
      title: '首页',
      url: '/pages/home',
      key: 1,
    },
    {
      title: '测试',
      url: '/pages/test',
      key: 2,
    }
  ];

  ngOnInit(): void {
    // 选中地址栏对应的菜单
    this.getPathname();
  }

  /**
   * 点击鼠标右键
   * @param $event event
   * @param menu menu
   */
  contextMenu($event: MouseEvent, menu: NzDropdownMenuComponent): void {
    this.nzContextMenuService.create($event, menu);
  }

  getPathname(): void {
    const pathname = location.pathname;
    this.selectedMenu({
      url: pathname
    });
  }

  /**
   * 点击标签
   * @param item item
   */
  chooseTag(item: any): void {
    this.router.navigate([item.url]);
    this.currentPath = item.url;
    this.selectedMenu(item);
  }
  /**
   * 跳转页面
   * @param item item
   */
  goToDetailMenu(item: any): void {
    this.router.navigate([item.url]);
    this.currentPath = item.url;
    this.selectedMenu(item);
  }

  /**
   * 回显选中的菜单
   * @param obj obj
   */
  selectedMenu(obj: any): void {
    this.menuList.map(item => {
      item.checkStatus = item.url === obj.url;
    });
  }

}
