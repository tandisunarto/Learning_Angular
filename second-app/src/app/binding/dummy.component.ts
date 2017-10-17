import { Component, OnInit, OnChanges, SimpleChanges, Input } from '@angular/core';

@Component({
  selector: 'app-dummy',
  templateUrl: './dummy.component.html',
  styles: []
})
export class DummyComponent implements OnInit, OnChanges {
  @Input() message: string;

  constructor() {
    console.log('>> dummy component constructor');
  }

  ngOnInit() {
    console.log('>> dummy component onInit');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('>> dummy component onChanges: ' + changes.message.currentValue);
  }
}
