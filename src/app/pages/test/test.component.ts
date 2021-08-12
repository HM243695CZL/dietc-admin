import { Component, OnInit } from '@angular/core';
import {TestService} from './test.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.less'],
  providers: [TestService]
})
export class TestComponent implements OnInit {

  drawingItem = {
    __config__: {
      label: '单行文本',
      labelWidth: null,
      showLabel: true,
      tag: 'input',
      tagIcon: 'input',
      defaultValue: undefined,
      required: true,
      sm: 3,
      regList: []
    },
    placeholder: '请输入',
    formId: 100
  };
  activeId = 100;
  constructor(
    private http: TestService
  ) { }

  ngOnInit(): void {
  }

  list() {
    this.http.getUserList().then((res: any) => {
      console.log(res);
    });
  }

  page() {
    this.http.page({}).then((res: any) => {
      console.log(res);
    });
  }

}
