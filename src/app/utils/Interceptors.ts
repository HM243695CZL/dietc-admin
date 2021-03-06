import axios from 'axios';
import {StorageUtil} from './storage.util';

// @ts-ignore
const baseURL = window.PLATFORM_CONFIG.baseUrl;

interface RequestStore {
  ui: any;
}
export class Interceptors {
  public instance: any;
  token = StorageUtil.getLocalStorage('token');
  constructor() {
    this.instance = axios.create({
      baseURL,
      timeout: 30000,
      withCredentials: false, // 在跨域请求时发送Cookie
      headers: {
        'Content-Type': 'application/json; charset=utf-8'
      }
    });
    this.initInterceptors();
  }

  public getInterceptor() {
    return this.instance;
  }

  /**
   * 初始化拦截器
   */
  public initInterceptors() {
    // 请求拦截
    this.instance.interceptors.request.use(
      (config: any) => {
        if(this.token) {
          config.headers.token = this.token;
        }
        return config;
      },
      (error: any) => {
        console.log(error);
        return Promise.reject(error);
      }
    );
    // 响应拦截
    this.instance.interceptors.response.use(
      (response: any) => {
        return response;
      },
      (error: any) => {
        console.log(error);
        return Promise.reject(error);
      }
    )
  }
}
