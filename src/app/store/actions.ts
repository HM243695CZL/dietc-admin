import { Injectable} from '@angular/core';
import {
  ADD_TAG_LIST,
  CUT_TAG_LIST, CUT_OTHER_TAG_LIST, EMPTY_TAG_LIST, CHANGE_CURR_PATH
} from './actionType';

@Injectable()
export class CounterAction {
  AddTagList(url: any, title?: string): any {
    return {
      type: ADD_TAG_LIST,
      payload: {
        url, title
      }
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
  ChangeCurrPath(url: any): any {
    return {
      type: CHANGE_CURR_PATH,
      payload: url
    }
  }
}
