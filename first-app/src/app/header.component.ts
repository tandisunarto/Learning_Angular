import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <p>
      THIS IS A HEADER COMPONENT
    </p>
  `,
  styles: []
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
