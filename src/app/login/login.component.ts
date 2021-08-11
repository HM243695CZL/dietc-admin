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
          checkStatus:false,
          children:[
            {
              title: '首页',
              url: '/pages/home',
            },
            {
              title: '表单生成器',
              url: '/pages/form-generator'
            },
            {
              checkStatus:false,
              children:[],
              disabled:false,
              icon:'fa fa-user-circle-o',
              isLeaf:true,
              key:'402881f371e8f5250171f21f1a410091',
              level:2,
              showLevel:1,
              status:1,
              title:'课程管理',
              url:'/pages/course-manage/my-class',
              value:'402881f371e8f5250171f21f1a410091'
            },
            {
              checkStatus: true,
              children: [],
              disabled: false,
              icon: 'fa fa-database',
              isLeaf: true,
              key: '402881f371e8f5250171f220379b00a6',
              level: 2,
              showLevel: 2,
              status: 1,
              title: '实验管理',
              url: '/pages/course-manage/classroom-manage',
              value: '402881f371e8f5250171f220379b00a6'
            }
          ],
          disabled:false,
          icon:'fa fa-gg-circle',
          isLeaf:false,
          key:'402881f371e8f5250171f21e7480008a',
          level:1,
          showLevel:2,
          status:1,
          title:'实验课程管理',
          url:'/pages/course-manage',
          value:'402881f371e8f5250171f21e7480008a'
        }
      ],
      token: 'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1bmlxdWVfbmFtZSI6ImNtIiwibG9naW5Vc2VyIjoiMTExMTEiLCJpc3MiOiJsbmxyIiwiYXVkIjoiMDk4ZjZiY2Q0NjIxZDM3M2NhZGU0ZTgzMjYyN2I0ZjYiLCJleHAiOjE2Mjg2MzYwMzAsIm5iZiI6MTYyODQ5MjAzMH0.e7fv3I0QNCwgyez4CBggzAq1Mz3hncohBcbAeI68KXY',
      user: {
        id:'11111',
        photo:null,
        realName:'超管员',
        status:1,
        student:null,
        teacher:{
          email:'leihfei@gmai.com',
          id:'1',
          orgName:'测试部门',
          position:'主任',
          roles:[
            '超级管理员'
          ],
          sex:0,
          telphone:'18788638847'
        },
        userType:0,
        username:'cm'
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
