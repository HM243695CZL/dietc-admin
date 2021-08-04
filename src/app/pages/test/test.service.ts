import {Injectable} from '@angular/core';
import {CommHttpService} from '../../utils/comm.http.service';
import {HttpService} from '../../utils/http.service';

@Injectable()
export class TestService extends CommHttpService{
  // @ts-ignore
  protected preUrl = `menu/`;
  constructor(
    protected http: HttpService
  ){
    super(http);
  }

  getUserList(): any {
    return this.http.get({},`${this.preUrl}list`);
  }

}
