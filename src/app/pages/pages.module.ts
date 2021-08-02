import {NgModule} from '@angular/core';

import {PagesRoutingModule} from './pages-routing.module';

import {PagesComponent} from './pages.component';
import { HomeComponent } from './home/home.component';
import { TestComponent } from './test/test.component';

@NgModule({
  imports: [PagesRoutingModule],
  declarations: [PagesComponent, HomeComponent, TestComponent],
  exports: [PagesComponent]
})

export class PagesModule { }
