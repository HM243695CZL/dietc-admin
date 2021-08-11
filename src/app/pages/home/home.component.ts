import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Store, select} from '@ngrx/store';
import {CounterAction} from '../../store/actions';

interface HomeStore {
  ui: any;
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {
  tagList: any;
  constructor(
    private store: Store<HomeStore>,
    private action: CounterAction
  ) {
    // 注入store
    const stream = store.pipe(select('ui'));
    // 从app.module.ts获取count状态流
    stream.subscribe(res => {
      this.tagList = res.tagList;
    });
  }

  ngOnInit(): void {
  }


}
