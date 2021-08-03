// reducer.ts,一般需要将state,action,reducer进行文件拆分
import { Action } from '@ngrx/store';
import {
  INCREMENT, DECREMENT, RESET, ADD_TAG_LIST,
  CUT_TAG_LIST, CUT_OTHER_TAG_LIST, EMPTY_TAG_LIST
} from './actionType';


const initialState = {
  count: 0,
  tagList: [],
  menuList: [
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
    },
    {
      title: '个人中心',
      url: '/pages/dashboard',
      key: 3,
      icon: 'fa fa-cc',
      checkStatus: false
    }
  ]
};
// reducer定义了action被派发时state的具体改变方式
export function counterReducer(state: any = initialState, action: Action): any {
  // @ts-ignore
  const {type, payload} = action;
  switch (type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1
      };

    case DECREMENT:
      return {
        ...state,
        count: state.count - 1
      };

    case RESET:
      return {
        ...state,
        count: 0
      };
    case ADD_TAG_LIST:
      const currentTagList = [...state.tagList];
      if (currentTagList.filter(ele => ele.url === payload).length) {
        return state;
      }
      let obj = {};
      state.menuList.map((item: { url: any; }) => {
        if (item.url === payload) {
          obj = item;
        }
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
