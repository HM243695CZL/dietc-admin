import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-classroom-manage',
  templateUrl: './classroom-manage.component.html',
  styleUrls: ['./classroom-manage.component.less']
})
export class ClassroomManageComponent implements OnInit {
  manageValue = '';
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
  constructor() { }

  ngOnInit(): void {
  }

}
