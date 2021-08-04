import { Component, OnInit } from '@angular/core';
import {TestService} from './test.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.less'],
  providers: [TestService]
})
export class TestComponent implements OnInit {
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
