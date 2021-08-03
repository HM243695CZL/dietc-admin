import { Injectable} from '@angular/core';
import {
  INCREMENT, DECREMENT, RESET, ADD_TAG_LIST,
  CUT_TAG_LIST, CUT_OTHER_TAG_LIST, EMPTY_TAG_LIST
} from './actionType';

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
  AddTagList(url: any): any {
    return {
      type: ADD_TAG_LIST,
      payload: url
    };
  }
  CutTagList(url: any): any {
    return {
      type: CUT_TAG_LIST,
      payload: url
    };
  }
  CutOtherTagList(url: any): any {
    return {
      type: CUT_OTHER_TAG_LIST,
      payload: url
    };
  }
  EmptyTagList(): any {
    return {
      type: EMPTY_TAG_LIST
    };
  }
}
