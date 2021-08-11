import { Component, OnInit } from '@angular/core';
import {inputComponents} from './generator/config';
import {Options} from 'sortablejs';

@Component({
  selector: 'app-form-generator',
  templateUrl: './form-generator.component.html',
  styleUrls: ['./form-generator.component.less']
})
export class FormGeneratorComponent implements OnInit {
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

  addComponent(item: any) {
    console.log(item);
    return item;
  };

}
