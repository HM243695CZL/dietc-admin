import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-classroom-manage',
  templateUrl: './classroom-manage.component.html',
  styleUrls: ['./classroom-manage.component.less']
})
export class ClassroomManageComponent implements OnInit {
  manageValue = '';
  constructor() { }

  ngOnInit(): void {
  }

}
