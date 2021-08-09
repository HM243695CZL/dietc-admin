// reducer.ts,一般需要将state,action,reducer进行文件拆分
import { Action } from '@ngrx/store';
import {
  ADD_TAG_LIST,
  CUT_TAG_LIST, CUT_OTHER_TAG_LIST, EMPTY_TAG_LIST
} from './actionType';
import {StorageUtil} from '../utils/storage.util';


const initialState = {
  token: StorageUtil.getLocalStorage('token'),
  tagList: [],
  menuList: StorageUtil.getLocalStorage('menus')
};
// reducer定义了action被派发时state的具体改变方式
export function uiReducer(state: any = initialState, action: Action): any {
  // @ts-ignore
  const {type, payload} = action;
  switch (type) {
    case ADD_TAG_LIST:
      const currentTagList = [...state.tagList];
      if (currentTagList.filter(ele => ele.url === payload).length) {
        return state;
      }
      let obj = {};
      state.menuList.map((item: {
        children: any;
        url: any; }) => {
        item.children.map((ele: { url: any; }) => {
          if(ele.url === payload) {
            obj = ele;
          }
        });
      });
      return {
        ...state,
        tagList: [
          ...state.tagList,
          obj
        ],
      };
    case CUT_TAG_LIST:
      return {
        ...state,
        tagList: [
          ...state.tagList.filter((ele: { url: any; }) => ele.url !== payload)
        ]
      };
    case CUT_OTHER_TAG_LIST:
      return {
        ...state,
        tagList: [
          ...state.tagList.filter((ele: { url: any; }) => ele.url === payload)
        ]
      };
    case EMPTY_TAG_LIST:
      return {
        ...state,
        tagList: []
      };
    default:
      return state;
  }
}
