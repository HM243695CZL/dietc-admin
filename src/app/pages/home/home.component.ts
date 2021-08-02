import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Store, select} from '@ngrx/store';
import {CounterAction} from '../../store/actions';

interface AppStore {
  count: number;
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {
  count: number | undefined;
  constructor(
    private store: Store<AppStore>,
    private action: CounterAction
  ) {
    // 注入store
    const stream = store.pipe(select('count'));
    // 从app.module.ts获取count状态流
    stream.subscribe(res => {
      this.count = res;
    });
  }

  ngOnInit(): void {
  }

  increment(): void {
    this.store.dispatch(this.action.Increment());
  }

  decrement(): void {
    this.store.dispatch(this.action.Decrement());
  }

  reset(): void {
    this.store.dispatch(this.action.Reset());
  }

}
