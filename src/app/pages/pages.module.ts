import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PagesRoutingModule} from './pages-routing.module';
import {FormsModule} from '@angular/forms';

import {PagesComponent} from './pages.component';
import { HomeComponent } from './home/home.component';
import { TestComponent } from './test/test.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  imports: [CommonModule, PagesRoutingModule, FormsModule],
  declarations: [PagesComponent, HomeComponent, TestComponent, DashboardComponent],
  exports: [PagesComponent]
})

export class PagesModule { }
