import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styles: [`
    input.ng-invalid {
      border: solid 1px red;
    }
  `]
})
export class TemplateDrivenComponent implements OnInit {

  private user = {
    username: 'tandi',
    password: 'secret',
    email: 'tandi@hotmail.com',
    gender: 'male'
  }

  genders: string[] = [
    'male',
    'female'
  ]

  constructor() { }

  ngOnInit() {
    console.log('onInit');
  }  

  onSubmit(form: NgForm) {    
    console.log(form.value)
    console.log(this.user)
  }
}
