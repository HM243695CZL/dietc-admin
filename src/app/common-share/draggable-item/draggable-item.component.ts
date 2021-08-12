import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-draggable-item',
  templateUrl: './draggable-item.component.html',
  styleUrls: ['./draggable-item.component.less']
})
export class DraggableItemComponent implements OnInit {
  @Input() drawingItem: any;
  @Input() activeId: any;
  constructor() { }

  ngOnInit(): void {
  }

}
