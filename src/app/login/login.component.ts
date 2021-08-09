import { Component, OnInit } from '@angular/core';
import {Md5} from 'ts-md5';
import {OtherUtil} from '../utils/other.util';
import {HttpService} from '../utils/http.service';
import {StorageUtil} from '../utils/storage.util';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {
  username = '';
  password = '';
  queryParam = '';
  code = '';
  randomImg = '';
  codeParam = new CodeParam();
  constructor(
    private http: HttpService,
    private router: Router
  ) { }

  ngOnInit(): void {
    // this.createPatch();
  }

  /**
   * 生成验证码
   */
  createPatch() {
    this.codeParam.action = OtherUtil.randomPassword(6).str;
    this.codeParam.appid = OtherUtil.randomPassword(6).str;
    this.codeParam.nowTime = new Date().getTime();
    // @ts-ignore
    this.randomImg = `${window.PLATFORM_CONFIG.baseUrl + window.SERVERS_NAME.SECURITY_SERVER}servlet/patchcaServlet?action=
    ${this.codeParam.action}&appid=${this.codeParam.appid}&key=${this.codeParam.nowTime}`;
    this.queryParam = this.codeParam.action + this.codeParam.appid + this.codeParam.nowTime;
  }

  /**
   * 点击登录
   */
  login() {
    const obj = {
      username: this.username,
      code: this.code,
      password: Md5.hashStr(this.password).toString(),
      queryParam: this.queryParam,
    };
    const datas = {
      auths: [],
      menus: [
        {
          "checkStatus":false,
          "children":[
            {
              "checkStatus":false,
              "children":[],
              "disabled":false,
              "icon":"fa fa-user-circle-o",
              "isLeaf":true,
              "key":"402881f371e8f5250171f21f1a410091",
              "level":2,
              "showLevel":1,
              "status":1,
              "title":"课程管理",
              "url":"/pages/course-manage/my-class",
              "value":"402881f371e8f5250171f21f1a410091"
            },
            {
              "checkStatus":false,
              "children":[],
              "disabled":false,
              "icon":"fa fa-database",
              "isLeaf":true,
              "key":"402881f371e8f5250171f220379b00a6",
              "level":2,
              "showLevel":2,
              "status":1,
              "title":"实验管理",
              "url":"/pages/course-manage/classroom-manage",
              "value":"402881f371e8f5250171f220379b00a6"
            },
            {
              "checkStatus":false,
              "children":[],
              "disabled":false,
              "icon":"fa fa-mortar-board",
              "isLeaf":true,
              "key":"402881847824047201782417c78d0053",
              "level":2,
              "showLevel":3,
              "status":1,
              "title":"学生管理",
              "url":"/pages/course-manage/student-manage",
              "value":"402881847824047201782417c78d0053"
            },
            {
              "checkStatus":false,
              "children":[],
              "disabled":false,
              "icon":"fa fa-home",
              "isLeaf":true,
              "key":"402881847838a622017838da13ff0060",
              "level":2,
              "showLevel":4,
              "status":1,
              "title":"在线排课",
              "url":"/pages/course-manage/online-cours",
              "value":"402881847838a622017838da13ff0060"
            },
            {
              "checkStatus":false,
              "children":[],
              "disabled":false,
              "icon":"fa fa-home",
              "isLeaf":true,
              "key":"4028818478240472017825339c8800eb",
              "level":2,
              "showLevel":5,
              "status":1,
              "title":"实验设置",
              "url":"/pages/course-manage/experimental-setup",
              "value":"4028818478240472017825339c8800eb"
            },
            {
              "checkStatus":false,
              "children":[
                {
                  "checkStatus":false,
                  "children":[],
                  "disabled":false,
                  "icon":"fa fa-home",
                  "isLeaf":true,
                  "key":"4028818478240472017825ebd77201a5",
                  "level":3,
                  "showLevel":1,
                  "status":1,
                  "title":"课程信息管理",
                  "url":"/pages/course-manage/basics-setting/course-information-manage",
                  "value":"4028818478240472017825ebd77201a5"
                },
                {
                  "checkStatus":false,
                  "children":[],
                  "disabled":false,
                  "icon":"fa fa-home",
                  "isLeaf":true,
                  "key":"4028818478240472017825eca14801ad",
                  "level":3,
                  "showLevel":2,
                  "status":1,
                  "title":"实验项目管理",
                  "url":"/pages/course-manage/basics-setting/experimental-project-manage",
                  "value":"4028818478240472017825eca14801ad"
                }
              ],
              "disabled":false,
              "icon":"fa fa-home",
              "isLeaf":false,
              "key":"4028818478240472017825ead0f9019a",
              "level":2,
              "showLevel":6,
              "status":1,
              "title":"基础设置",
              "url":"/pages/course-manage/basics-setting",
              "value":"4028818478240472017825ead0f9019a"
            },
            {
              "checkStatus":false,
              "children":[
                {
                  "checkStatus":false,
                  "children":[],
                  "disabled":false,
                  "icon":"fa fa-home",
                  "isLeaf":true,
                  "key":"402881847833902c01783398d2e60019",
                  "level":3,
                  "showLevel":1,
                  "status":1,
                  "title":"课程任务",
                  "url":"/pages/course-manage/task-setting/course-task",
                  "value":"402881847833902c01783398d2e60019"
                },
                {
                  "checkStatus":false,
                  "children":[],
                  "disabled":false,
                  "icon":"fa fa-home",
                  "isLeaf":true,
                  "key":"402881847833902c017833999ab30027",
                  "level":3,
                  "showLevel":2,
                  "status":1,
                  "title":"实验任务",
                  "url":"/pages/course-manage/task-setting/experimental-task",
                  "value":"402881847833902c017833999ab30027"
                }
              ],
              "disabled":false,
              "icon":"fa fa-home",
              "isLeaf":false,
              "key":"402881847833902c017833979ea80012",
              "level":2,
              "showLevel":7,
              "status":1,
              "title":"任务设置",
              "url":"/pages/course-manage/task-setting",
              "value":"402881847833902c017833979ea80012"
            },
            {
              "checkStatus":false,
              "children":[
                {
                  "checkStatus":false,
                  "children":[],
                  "disabled":false,
                  "icon":"fa fa-home",
                  "isLeaf":true,
                  "key":"402881847833902c017833d3d5440089",
                  "level":3,
                  "showLevel":1,
                  "status":1,
                  "title":"课程统计",
                  "url":"/pages/course-manage/data-statistics/course-statistics",
                  "value":"402881847833902c017833d3d5440089"
                },
                {
                  "checkStatus":false,
                  "children":[],
                  "disabled":false,
                  "icon":"fa fa-home",
                  "isLeaf":true,
                  "key":"402881847833902c017833d46d530091",
                  "level":3,
                  "showLevel":2,
                  "status":1,
                  "title":"实验统计",
                  "url":"/pages/course-manage/data-statistics/experimental-statistics",
                  "value":"402881847833902c017833d46d530091"
                }
              ],
              "disabled":false,
              "icon":"fa fa-home",
              "isLeaf":false,
              "key":"402881847833902c017833d334460082",
              "level":2,
              "showLevel":8,
              "status":1,
              "title":"数据统计",
              "url":"/pages/course-manage/data-statistics",
              "value":"402881847833902c017833d334460082"
            },
            {
              "checkStatus":false,
              "children":[],
              "disabled":false,
              "icon":"fa fa-home",
              "isLeaf":true,
              "key":"402881847833902c017834003b1a0167",
              "level":2,
              "showLevel":9,
              "status":1,
              "title":"报告管理",
              "url":"/pages/course-manage/report-manage",
              "value":"402881847833902c017834003b1a0167"
            },
            {
              "checkStatus":false,
              "children":[],
              "disabled":false,
              "icon":"fa fa-home",
              "isLeaf":true,
              "key":"402881847833902c017834895c45021a",
              "level":2,
              "showLevel":10,
              "status":1,
              "title":"课程归档管理",
              "url":"/pages/course-manage/course-archive-manage",
              "value":"402881847833902c017834895c45021a"
            },
            {
              "checkStatus":false,
              "children":[],
              "disabled":false,
              "icon":"fa fa-home",
              "isLeaf":true,
              "key":"402881847833902c0178348a000c0221",
              "level":2,
              "showLevel":11,
              "status":1,
              "title":"下载中心",
              "url":"/pages/course-manage/download-centers",
              "value":"402881847833902c0178348a000c0221"
            }
          ],
          "disabled":false,
          "icon":"fa fa-gg-circle",
          "isLeaf":false,
          "key":"402881f371e8f5250171f21e7480008a",
          "level":1,
          "showLevel":2,
          "status":1,
          "title":"实验课程管理",
          "url":"/pages/course-manage",
          "value":"402881f371e8f5250171f21e7480008a"
        },
        {
          "checkStatus":false,
          "children":[
            {
              "checkStatus":false,
              "children":[],
              "disabled":false,
              "icon":"fa fa-user-o",
              "isLeaf":true,
              "key":"4028813a6a492795016a4cf878980444",
              "level":2,
              "showLevel":1,
              "status":1,
              "title":"教师管理",
              "url":"/pages/plat/teacher",
              "value":"4028813a6a492795016a4cf878980444"
            },
            {
              "checkStatus":false,
              "children":[],
              "disabled":false,
              "icon":"fa fa-list-alt",
              "isLeaf":true,
              "key":"4028813a6a4d0404016a4d0f6f2000c3",
              "level":2,
              "showLevel":2,
              "status":1,
              "title":"部门管理",
              "url":"/pages/plat/department-manage",
              "value":"4028813a6a4d0404016a4d0f6f2000c3"
            },
            {
              "checkStatus":false,
              "children":[],
              "disabled":false,
              "icon":"fa fa-user-circle-o",
              "isLeaf":true,
              "key":"4028813a6a4d0404016a4d111ab400de",
              "level":2,
              "showLevel":3,
              "status":1,
              "title":"房间管理",
              "url":"/pages/plat/room",
              "value":"4028813a6a4d0404016a4d111ab400de"
            },
            {
              "checkStatus":false,
              "children":[],
              "disabled":false,
              "icon":"fa fa-calendar-minus-o",
              "isLeaf":true,
              "key":"4028b8816b0c01f9016b0c557159011e",
              "level":2,
              "showLevel":4,
              "status":1,
              "title":"学期管理",
              "url":"/pages/plat/semester-manage",
              "value":"4028b8816b0c01f9016b0c557159011e"
            },
            {
              "checkStatus":false,
              "children":[],
              "disabled":false,
              "icon":"fa fa-delicious",
              "isLeaf":true,
              "key":"4028813a6a4d0404016a4d1dfda8019d",
              "level":2,
              "showLevel":5,
              "status":1,
              "title":"菜单管理",
              "url":"/pages/plat/menu",
              "value":"4028813a6a4d0404016a4d1dfda8019d"
            },
            {
              "checkStatus":false,
              "children":[],
              "disabled":false,
              "icon":"fa fa-users",
              "isLeaf":true,
              "key":"4028813a6a4d0404016a4d1feffe01ab",
              "level":2,
              "showLevel":6,
              "status":1,
              "title":"角色管理",
              "url":"/pages/plat/roles",
              "value":"4028813a6a4d0404016a4d1feffe01ab"
            },
            {
              "checkStatus":false,
              "children":[],
              "disabled":false,
              "icon":"fa fa-columns",
              "isLeaf":true,
              "key":"4028813a6a4d0404016a4d1c79ad0194",
              "level":2,
              "showLevel":7,
              "status":1,
              "title":"字典管理",
              "url":"/pages/plat/dictionary",
              "value":"4028813a6a4d0404016a4d1c79ad0194"
            },
            {
              "checkStatus":false,
              "children":[],
              "disabled":false,
              "icon":"fa fa-bell-o",
              "isLeaf":true,
              "key":"4028813a6bfa10d3016bfdb1b4ee0133",
              "level":2,
              "showLevel":8,
              "status":1,
              "title":"消息中心",
              "url":"/pages/plat/news",
              "value":"4028813a6bfa10d3016bfdb1b4ee0133"
            },
            {
              "checkStatus":false,
              "children":[],
              "disabled":false,
              "icon":"fa fa-address-card-o",
              "isLeaf":true,
              "key":"4028812b71594b6101715d06957f0102",
              "level":2,
              "showLevel":10,
              "status":1,
              "title":"课节管理",
              "url":"/pages/plat/lesson-manage",
              "value":"4028812b71594b6101715d06957f0102"
            }
          ],
          "disabled":false,
          "icon":"fa fa-user-o",
          "isLeaf":false,
          "key":"1",
          "level":1,
          "showLevel":999,
          "status":1,
          "title":"系统管理",
          "url":'/pages/plat/',
          value:'1'
        }
      ],
      token: 'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1bmlxdWVfbmFtZSI6ImNtIiwibG9naW5Vc2VyIjoiMTExMTEiLCJpc3MiOiJsbmxyIiwiYXVkIjoiMDk4ZjZiY2Q0NjIxZDM3M2NhZGU0ZTgzMjYyN2I0ZjYiLCJleHAiOjE2Mjg2MzYwMzAsIm5iZiI6MTYyODQ5MjAzMH0.e7fv3I0QNCwgyez4CBggzAq1Mz3hncohBcbAeI68KXY',
      user: {
        "id":"11111",
        "photo":null,
        "realName":"超管员",
        "status":1,
        "student":null,
        "teacher":{
          "email":"leihfei@gmai.com",
          "id":"1",
          "orgName":"测试部门",
          "position":"主任",
          "roles":[
            "超级管理员"
          ],
          "sex":0,
          "telphone":"18788638847"
        },
        "userType":0,
        "username":"cm"
      }
    };
    StorageUtil.setLocalStorage('auths', datas.auths);
    StorageUtil.setLocalStorage('menus', datas.menus);
    StorageUtil.setLocalStorage('token', datas.token);
    StorageUtil.setLocalStorage('user', datas.user);
    this.router.navigate(['/pages']);
    // @ts-ignore
    // this.http.post(obj, `${window.SERVERS_NAME.SECURITY_SERVER}sys/authorizing/login`).then(res => {
    //   console.log(res);
    // })
  }
}

class CodeParam {
  action = '';
  appid = '';
  nowTime = new Date().getTime();
}
