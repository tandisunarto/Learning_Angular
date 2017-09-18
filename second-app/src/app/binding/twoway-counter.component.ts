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
  myInput: string;

  constructor() { }

  ngOnInit() {
  }

  onGenderChanged(myEvent) {
    console.log(this.selectedGenderValue);
    this.genderChanged.emit(this.selectedGenderValue);
  }

  onMyInputChanged() {
    console.log(this.myInput);
  }

}
