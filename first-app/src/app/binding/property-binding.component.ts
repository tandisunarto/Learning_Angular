import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  template: `
    <div>
      bound value = {{result}}
    </div>
  `,
  styles: []
})
export class PropertyBindingComponent implements OnInit {

  @Input() result: string = 'nothing';
  constructor() { }

  ngOnInit() {
  }

}
