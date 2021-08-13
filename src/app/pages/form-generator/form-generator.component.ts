import { Component, OnInit } from '@angular/core';
import {inputComponents} from './generator/config';
import { drawingDefault } from  './generator/drawingDefault'
import {Options} from 'sortablejs';
import {ToolUtils} from '../../utils/tool.utils';

@Component({
  selector: 'app-form-generator',
  templateUrl: './form-generator.component.html',
  styleUrls: ['./form-generator.component.less']
})
export class FormGeneratorComponent implements OnInit {
  idGlobal = 100;
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
  activeData: any = drawingDefault[0];
  tempActiveData: any = {};
  drawingList: any = drawingDefault;
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
    this.activeData = item;
    this.activeId = this.idGlobal;
    return item;
  };

  createIdAndKey(item: any) {
    const config = item.__config__;
    config.formId = ++this.idGlobal;
    if(config.layout === 'colFormItem') {
      item.__vModel__ = `field${this.idGlobal}`;
    }
    return item;
  }

  addComponent(item: any) {
    const clone = this.cloneComponent(item);
    this.drawingList.push(clone);
    this.activeFormItem(clone);
  };

  cloneComponent(origin: any) {
    const clone = ToolUtils.deepClone(origin);
    const config = clone.__config__;
    this.createIdAndKey(clone);
    if(clone.placeholder !== undefined) {
      clone.placeholder += config.label
    }
    this.tempActiveData = clone;
    return this.tempActiveData;
  }

  activeFormItem(currentItem: any) {
    this.activeData = currentItem;
    this.activeId = currentItem.__config__.formId;
  }

  showData() {
    console.log(this.drawingList);
  }

}
