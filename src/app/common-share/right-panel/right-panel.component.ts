import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-right-panel',
  templateUrl: './right-panel.component.html',
  styleUrls: ['./right-panel.component.less']
})
export class RightPanelComponent implements OnInit {
  @Input() activeData: any;
  currentTab = 0;
  constructor() { }

  ngOnInit(): void {
  }

  changeCurrentTab(event: any) {
    this.currentTab = event.index;
  }

}
