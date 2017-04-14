import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-event-property-binding',
  template: `
  <br>
    <div *ngIf="searchKey.length <= 0">****************************</div>
    <input [value]="searchKey" (input)="searchKey=$event.target.value" type="text" />
    <button (click)="onSearchClick()">Search</button>
  `,
  styles: []
})
export class EventPropertyBindingComponent implements OnInit {

  @Input() searchKey = '';
  @Output() searchClick = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {    
  }

  onSearchClick(){
    this.searchClick.emit(this.searchKey);
  }
}
