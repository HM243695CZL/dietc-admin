import { Component, OnInit } from '@angular/core';
import {inputComponents} from './generator/config';
import {Options} from 'sortablejs';

@Component({
  selector: 'app-form-generator',
  templateUrl: './form-generator.component.html',
  styleUrls: ['./form-generator.component.less']
})
export class FormGeneratorComponent implements OnInit {
  isGlobal = 100;
  leftComponents = [
    {
      title: '输入型组件',
      list: inputComponents
    },
    {
      title: '选择型组件',
      list: []
    },
    {
      title: '布局型组件',
      list: []
    }
  ];
  activeId: any = '';
  activeData: any = {};
  drawingList: any = [];
  sourceOptions: Options = {
    group: {
      name: 'clone-group',
      pull: 'clone',
      put: false,
    },
  };

  targetOptions: Options = {
    group: 'clone-group',
  };
  constructor() { }

  ngOnInit(): void {
  }

  onEnd(item: any) {
    return item;
  };

  createIdAndKey(item: any) {
    item.formId = this.activeId = ++this.isGlobal;
    return item;
  }

  addComponent(item: any) {
    this.createIdAndKey(item);
    this.drawingList.push(item);
  };

  showData() {
    console.log(this.drawingList);
  }

}
