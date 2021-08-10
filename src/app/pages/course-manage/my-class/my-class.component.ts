import { Component, OnInit } from '@angular/core';
import {NavigationExtras, Router} from '@angular/router';
import {select, Store} from '@ngrx/store';
import {CounterAction} from '../../../store/actions';

interface AppStore {
  ui: any;
}

@Component({
  selector: 'app-my-class',
  templateUrl: './my-class.component.html',
  styleUrls: ['./my-class.component.less']
})
export class MyClassComponent implements OnInit {
  classValue = '';

  constructor(
    private router: Router,
    private store: Store<AppStore>,
    private action: CounterAction
  ) {}

  ngOnInit(): void {
  }

  showClassInfo(type: string | number) {
    const data = {
      1: 'show-info-1',
      2: 'show-info-2',
      3: 'show-info-3',
    };
    // @ts-ignore
    this.router.navigate(['/pages/course-manage/class-info', data[type]]);
    // @ts-ignore
    this.store.dispatch(this.action.AddTagList(`/pages/course-manage/class-info?${data[type]}`, '课程详情'))
  }

}
