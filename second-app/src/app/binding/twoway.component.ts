import { Component, OnInit } from '@angular/core';

const employees: any[] = [
  {
    name: 'John Doe',
    gender: 'male'
  },
  {
    name: 'Marilyn Monroe',
    gender: 'female'
  },
  {
    name: 'John Kennedy',
    gender: 'male'
  },
  {
    name: 'Sam Walton',
    gender: 'male'
  },
  {
    name: 'Kate Spring',
    gender: 'male'
  },
];

@Component({
  selector: 'app-twoway',
  templateUrl: './twoway.component.html',
  styles: []
})
export class TwowayComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
