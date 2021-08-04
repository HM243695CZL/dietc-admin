import {Injectable} from '@angular/core';
import {Interceptors} from './Interceptors';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  public axios: any;

  constructor() {
    // @ts-ignore
    this.axios = new Interceptors().getInterceptor();
  }

  get(data: any, url: string) {
    return new Promise(((resolve, reject) => {
      this.axios.get(url, {
        params: data
      }).then((res: any) => {
        resolve(res);
      }).catch((err: any) => {
        reject(err);
      });
    }));
  }

  post(data: any, url: string) {
    return new Promise(((resolve, reject) => {
      this.axios.post(url, data).then((res: any) => {
        resolve(res);
      }).catch((err: any) => {
        reject(err);
      });
    }));
  }
}
