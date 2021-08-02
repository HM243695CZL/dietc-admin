// reducer.ts,一般需要将state,action,reducer进行文件拆分
import { Action } from '@ngrx/store';
import {INCREMENT, DECREMENT, RESET} from './actionType';


const initialState = 0;
// reducer定义了action被派发时state的具体改变方式
export function counterReducer(state: number = initialState, action: Action): any {
  switch (action.type) {
    case INCREMENT:
      return state + 1;

    case DECREMENT:
      return state - 1;

    case RESET:
      return 0;

    default:
      return state;
  }
}
