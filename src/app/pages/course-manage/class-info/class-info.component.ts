import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-class-info',
  templateUrl: './class-info.component.html',
  styleUrls: ['./class-info.component.less']
})
export class ClassInfoComponent implements OnInit {
  infoValue = '';
  routerParams: any;
  constructor(
    private routerInfo: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.routerParams = this.routerInfo.snapshot.params;
  }

}
