import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule} from '@angular/forms';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';

import { DraggableItemComponent } from './draggable-item/draggable-item.component';


@NgModule({
  declarations: [
    DraggableItemComponent
  ], // 引入共享的组件
  imports: [
    CommonModule, FormsModule, NzFormModule,
    NzInputModule
  ],
  exports: [
    DraggableItemComponent
  ] // 把共享的组件放入到导出的出口中
})
export class CommonShareModule { }
