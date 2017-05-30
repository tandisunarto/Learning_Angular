import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-temperature',
  template: `
    <p>
      {{tempConversion}}
    </p>
    <div (mouseover)="onMouseOverTime()">Time:</div>
  `,
  styles: []
})
export class TemperatureComponent implements OnInit {

  @Input() c: number;
  @Input() f: number;

  @Output() onShowTime: EventEmitter<Date> = new EventEmitter<Date>();

  tempConversion: string = '';

  constructor() { }

  ngOnInit() {
    if (this.c != undefined) {
      this.tempConversion = this.tempConversion + this.c + 'C = ' + (this.c * 1.8 + 32) + 'F';
    }
    if (this.f != undefined) {
      this.tempConversion = this.tempConversion + this.f + 'F = ' + (this.f - 32) / 1.8 + 'C';
    }
  }

  onMouseOverTime() {
    this.onShowTime.emit(new Date());
  }

}
