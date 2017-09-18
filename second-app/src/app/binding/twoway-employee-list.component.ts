import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-twoway-employee-list',
  templateUrl: './twoway-employee-list.component.html',
  styles: []
})
export class TwowayEmployeeListComponent implements OnInit {

  @Input() employees;

  constructor() { }

  ngOnInit() {
  }

}
