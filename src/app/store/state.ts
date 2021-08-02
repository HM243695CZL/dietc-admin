// 下面是使用接口的情况， 更规范
export interface TaskList {
  id: number;
  text: string;
  complete: boolean;
}

export const TASKSAll: TaskList[] = [
  {id: 1, text: 'Java Article 1', complete: false},
  {id: 2, text: 'Java Article 2', complete: false}
]

export interface AppState {
  count: number;
  todos: TaskList;
  // 如果要管理多个状态,在这个接口中添加即可
}
