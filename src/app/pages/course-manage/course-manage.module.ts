import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CourseManageComponent} from './course-manage.component';
import {MyClassComponent} from './my-class/my-class.component';

import { NzInputModule } from 'ng-zorro-antd/input';
import {FormsModule} from '@angular/forms';
import { ClassroomManageComponent } from './classroom-manage/classroom-manage.component';
import { ClassInfoComponent } from './class-info/class-info.component';
import {CommonShareModule} from '../../common-share/common-share.module';


const routes: Routes = [
  {
    path: '',
    component: CourseManageComponent,
    children: [
      {
        path: 'my-class',
        component: MyClassComponent,
        data: {
          breadcrumb: '我的课堂'
        }
      },
      {
        path: 'classroom-manage',
        component: ClassroomManageComponent,
        data: {
          breadcrumb: '课堂管理'
        }
      },
      {
        path: 'class-info/:id',
        component: ClassInfoComponent,
        data: {
          breadcrumb: '课堂详情'
        }
      }
    ]
  }
];

@NgModule({
  declarations: [
    CourseManageComponent,
    MyClassComponent,
    ClassroomManageComponent,
    ClassInfoComponent
  ],
  imports: [
    NzInputModule, FormsModule, CommonShareModule,
    RouterModule.forChild(routes)
  ]
})
export class CourseManageModule {
}
