import {NgModule} from '@angular/core';

import {CommonModule} from '@angular/common';
import {PagesRoutingModule} from './pages-routing.module';

import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzTagModule} from 'ng-zorro-antd/tag';
import { NzDropDownModule} from 'ng-zorro-antd/dropdown';
import { NzFormModule} from 'ng-zorro-antd/form';
import { NzButtonModule } from 'ng-zorro-antd/button';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';


import {PagesComponent} from './pages.component';
import { HomeComponent } from './home/home.component';
import { TestComponent } from './test/test.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {uiReducer} from '../store/reducer';
import {environment} from '../../environments/environment';
import {EffectsModule} from '@ngrx/effects';
import {StoreRouterConnectingModule} from '@ngrx/router-store';
import {IconsProviderModule} from '../icons-provider.module';


@NgModule({
  imports: [
    CommonModule, PagesRoutingModule,IconsProviderModule,
    NzLayoutModule, NzMenuModule, NzTagModule,
    NzFormModule, NzButtonModule,
    NzDropDownModule,StoreModule.forRoot({
      ui: uiReducer
    }, {}), // 注册store
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot([]),
    StoreRouterConnectingModule.forRoot()
  ],
  declarations: [
    PagesComponent, HomeComponent, TestComponent,
    DashboardComponent
  ],
  exports: [PagesComponent]
})

export class PagesModule { }
