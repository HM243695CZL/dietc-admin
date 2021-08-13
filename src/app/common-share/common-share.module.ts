import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule} from '@angular/forms';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzTabsModule} from 'ng-zorro-antd/tabs';

import { DraggableItemComponent } from './draggable-item/draggable-item.component';
import { RightPanelComponent } from './right-panel/right-panel.component';


@NgModule({
  declarations: [
    DraggableItemComponent,
    RightPanelComponent
  ], // 引入共享的组件
  imports: [
    CommonModule, FormsModule, NzFormModule,
    NzInputModule, NzTabsModule
  ],
  exports: [
    DraggableItemComponent,
    RightPanelComponent
  ] // 把共享的组件放入到导出的出口中
})
export class CommonShareModule { }
