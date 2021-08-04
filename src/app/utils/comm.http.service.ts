import {Injectable} from '@angular/core';
import {HttpService} from './http.service';

@Injectable()
export class CommHttpService{
  protected PRE_URL = '';

  constructor(
    protected http: HttpService
  ) {}

  /**
   * 分页查询
   */
  page(page: any): any {
    return this.http.post(page, `${this.PRE_URL}page`);
  }

  protected get preUrl(): string {
    return this.PRE_URL;
  }

  protected set preUrl(value: string) {
    this.PRE_URL = value;
  }

}
