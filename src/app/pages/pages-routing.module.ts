import { NgModule} from '@angular/core';

import {Routes, RouterModule} from '@angular/router';
import {PagesComponent} from './pages.component';
import {HomeComponent} from './home/home.component';
import {TestComponent} from './test/test.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {LoginActivate} from '../utils/login.activate';
import {FormGeneratorComponent} from './form-generator/form-generator.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'form-generator',
        component: FormGeneratorComponent
      },
      {
        path: 'test',
        component: TestComponent,
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'course-manage',
        loadChildren: () => import('./course-manage/course-manage.module').then(m => m.CourseManageModule),
      },
      {path: '', redirectTo: 'home', pathMatch: 'full'},
      {path: '**', redirectTo: 'home'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class PagesRoutingModule { }
