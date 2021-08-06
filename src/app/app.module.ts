import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { zh_CN } from 'ng-zorro-antd/i18n';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';

import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {AppReuseStrategy} from './router/routerUtils/AppReuseStrategy';
import {RouteReuseStrategy} from '@angular/router';
import {LoginActivate} from './utils/login.activate';
import { LoginComponent } from './login/login.component';
import {CounterAction} from './store/actions';

registerLocaleData(zh);

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule, AppRoutingModule, FormsModule,
    HttpClientModule, BrowserAnimationsModule,
    NzFormModule, NzInputModule, NzButtonModule
  ],
  providers: [
    { provide: NZ_I18N, useValue: zh_CN },
    { provide: RouteReuseStrategy, useClass: AppReuseStrategy },
    LoginActivate,
    CounterAction
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
