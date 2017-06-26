import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styles: [`
    .ng-invalid {
      border: solid 1px red;
    }
  `]
})
export class TemplateDrivenComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log('onInit');
  }

  onSubmit(form: NgForm) {
    
    console.log(form.valid + ' - ' + form.value.username)
  }
}
