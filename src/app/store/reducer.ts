// reducer.ts,一般需要将state,action,reducer进行文件拆分
import { Action } from '@ngrx/store';
import {
  ADD_TAG_LIST,
  CUT_TAG_LIST, CUT_OTHER_TAG_LIST, EMPTY_TAG_LIST, CHANGE_CURR_PATH
} from './actionType';
import {StorageUtil} from '../utils/storage.util';


const initialState = {
  token: StorageUtil.getLocalStorage('token'),
  tagList: [],
  menuList: StorageUtil.getLocalStorage('menus'),
  currentPath: location.pathname
};
// reducer定义了action被派发时state的具体改变方式
export function uiReducer(state: any = initialState, action: Action): any {
  // @ts-ignore
  const {type, payload} = action;
  switch (type) {
    case ADD_TAG_LIST:
      const currentTagList = [...state.tagList];
      if (currentTagList.filter(ele => ele.url === payload.url).length) {
        return state;
      }
      let obj = {};
      state.menuList.map((item: {
        children: any;
        url: any; }) => {
        item.children.map((ele: { url: any; }) => {
          // 跳转到对应组件详情页
          if(payload.title) {
            obj = {
              title: payload.title,
              url: payload.url
            }
          }
          if(ele.url === payload.url) {
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
    case CHANGE_CURR_PATH:
      return {
        ...state,
        currentPath: payload
      };
    default:
      return state;
  }
}
