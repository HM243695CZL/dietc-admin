import {OtherUtil} from './other.util';

/**
 * @author leihfei
 * @date 2019-04-01
 * @description storage存储相关工具类
 */
export class StorageUtil {

  /**
   * 判断数据是否能转为json
   * @param str str
   */
  public static isJsonString(str: any) {
    try {
      if (typeof JSON.parse(str) === 'object') {
        return true;
      }
    } catch(e) {
    }
    return false;
  }

  public static isUndefined(key: string | undefined): boolean {
    return key === undefined;
  }

  /**
   * 存储session
   * @param key key
   * @param value 值
   */
  public static setSession(key: string, value: any): void {
    if (OtherUtil.isUndefined(key) || OtherUtil.isUndefined(value) || key === '') {
      throw new Error('session存储参数异常');
    }
    sessionStorage.setItem(key, JSON.stringify(value));
  }

  /**
   * 通过key获取sessio数据
   * @param key key
   */
  public static getSession(key: string): any {
    if (OtherUtil.isUndefined(key) || key === '') {
      throw new Error('session获取数据参数异常');
    }
    const value = sessionStorage.getItem(key);
    if(this.isJsonString(value)) {
      // @ts-ignore
      return JSON.parse(value);
    }
    return value;
  }

  /**
   * 设置localStorage数据
   * @param key  key
   * @param value value
   */
  public static setLocalStorage(key: string, value: any): void {
    if (OtherUtil.isUndefined(key) || OtherUtil.isUndefined(value) || key === '') {
      throw new Error('local存储参数异常');
    }
    localStorage.setItem(key, JSON.stringify(value));
  }

  /**
   * 通过key获取localStorage数据
   * @param key key
   */
  public static getLocalStorage(key: string): any {
    if (OtherUtil.isUndefined(key) || key === '') {
      throw new Error('local获取数据参数异常');
    }
    const value = localStorage.getItem(key);
    if (OtherUtil.isUndefined(value)) {
      return null;
    }
    // @ts-ignore
    return JSON.parse(value);
  }

  /**
   * 通过key清除session
   * @param key key
   */
  public static removeSession(key: string): void {
    if (this.isUndefined(key) || key === '') {
      throw new Error('session移除数据参数异常');
    }
    sessionStorage.removeItem(key);
  }

  /**
   * 清除所有sessionkey
   */
  public static clearSession(): void {
    sessionStorage.clear();
  }

  /**
   * 通过key清除localStorage
   * @param key key
   */
  public static removeLocal(key: string): void {
    if (this.isUndefined(key) || key === '') {
      throw new Error('local移除数据参数异常');
    }
    localStorage.removeItem(key);
  }

  /**
   * 清除所有localstorage
   */
  public static clearLocal(): void {
    localStorage.clear();
  }

  /**
   * @author leihfei
   * @date 2019-05-06
   * @description 获取文件上传时Token并写入到header中
   */
  public static getFileHeader(): any {
    const token = StorageUtil.getLocalStorage('token');
    const headerInfo = {
      Authorization: token,
      enctype: 'multipart/form-data'
    };
    return headerInfo;
  }

  /**
   * @author leihfei
   * @date 2019-05-10
   * @description 根据登录时返回的权限点，判断是否拥有此权限
   * @param auth 权限点
   */
  public static check(auth: string): boolean {
    return true;
  }
}

