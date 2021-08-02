import { Injectable} from '@angular/core';
import {INCREMENT, DECREMENT, RESET} from './actionType';

@Injectable()
export class CounterAction {
  Increment(): any {
    return {
      type: INCREMENT
    };
  }
  Decrement(): any {
    return {
      type: DECREMENT
    };
  }
  Reset(): any {
    return {
      type: RESET
    };
  }
}
