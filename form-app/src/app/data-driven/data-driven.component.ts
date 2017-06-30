import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray, FormBuilder } from '@angular/forms';
import { Observable } from "rxjs/Observable";

@Component({
  selector: 'app-data-driven',
  templateUrl: './data-driven.component.html',
  styles: [],
})
export class DataDrivenComponent implements OnInit {

  myForm: FormGroup;

  genders = [
    'male',
    'female'
  ]

  constructor(private formBuilder: FormBuilder) { 
    // this.myForm = new FormGroup({
    //   'userData': new FormGroup({
    //     'username': new FormControl('tsunarto', Validators.required),
    //     'email': new FormControl('tsunarto@live.com', [
    //       Validators.required,
    //       Validators.pattern("[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}")
    //       ]),  
    //   }),
    //   'password': new FormControl('abc', Validators.required),
    //   'gender': new FormControl('male'),
    //   'hobbies': new FormArray([
    //     new FormControl('Cooking', Validators.required)
    //   ])
    // })

    this.myForm = formBuilder.group(
     {
      'userData': formBuilder.group({
        'username': ['tsunarto', [Validators.required, this.exampleValidator]],
        'email': ['tsunarto@live.com', [
          Validators.required,
          Validators.pattern("[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}")
          ]],  
      }),
      'password': ['abc', Validators.required],
      'gender': ['male'],
      'hobbies': formBuilder.array([
        ['Cooking', Validators.required, this.asyncExampleValidator]
      ])
    })

    this.myForm.statusChanges.subscribe(
      (data: any) => console.log(data)
    );
  }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.myForm.value)
  }

  onAddHobby() {
    (<FormArray>this.myForm.get('hobbies')).push(new FormControl('', Validators.required, this.asyncExampleValidator))
  }

  exampleValidator(control: FormControl): {[s: string]: boolean}{
    if (control.value === 'Example')
      return { example: true };

    return null;
  }

  asyncExampleValidator(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>(
      (resolve, reject) => {
        setTimeout(() => {
          console.log('>>>> ' + control.value)
          if (control.value === 'Example') {
            resolve({'invalid': true})
          } else {
            resolve(null);
          }
        }, 1500);
      }    
    );
    return promise;
  }
}
