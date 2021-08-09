import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CourseManageComponent} from './course-manage.component';
import {MyClassComponent} from './my-class/my-class.component';


const routes: Routes = [
  {
    path: '',
    component: CourseManageComponent,
    children: [
      {
        path: 'my-class',
        component: MyClassComponent
      }
    ]
  }
];

@NgModule({
  declarations: [
    CourseManageComponent,
    MyClassComponent
  ],
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class CourseManageModule {
}
