import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CourseManageComponent} from './course-manage.component';
import {MyClassComponent} from './my-class/my-class.component';

import { NzInputModule } from 'ng-zorro-antd/input';
import {FormsModule} from '@angular/forms';
import { ClassroomManageComponent } from './classroom-manage/classroom-manage.component';


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
      }
    ]
  }
];

@NgModule({
  declarations: [
    CourseManageComponent,
    MyClassComponent,
    ClassroomManageComponent
  ],
  imports: [
    NzInputModule, FormsModule,
    RouterModule.forChild(routes)
  ]
})
export class CourseManageModule {
}
