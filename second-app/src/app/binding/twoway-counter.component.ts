import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-twoway-counter',
  templateUrl: './twoway-counter.component.html',
  styles: [`
    .radioClass {
      padding-right: 10px;
    }
  `]
})
export class TwowayCounterComponent implements OnInit {

  @Input() all;
  @Input() male;
  @Input() female;

  @Output() genderChanged: EventEmitter<string> = new EventEmitter<string>();

  selectedGenderValue = 'all';

  // trying two way binding with getter/setter
  _myInput = '';
  get myInput(): string {
    return this._myInput;
  }

  set myInput(value) {
    this._myInput = value;
  }

  constructor() { }

  ngOnInit() {
  }

  onGenderChanged(myEvent) {
    this.genderChanged.emit(this.selectedGenderValue);
  }

  onMyInputChanged() {
  }

}
