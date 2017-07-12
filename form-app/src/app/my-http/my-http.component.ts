import { Component, OnInit } from '@angular/core';
import { MyHttpService } from './my-http.service';
import { Response } from '@angular/http';
import { Observable } from "rxjs/Observable";

@Component({
  selector: 'app-my-http',
  templateUrl: './my-http.component.html',
  styles: [],
  providers: [MyHttpService]
})
export class MyHttpComponent implements OnInit {
  items: any[] = [];
  asyncString: Observable<any> = this.myHttpService.getData();

  constructor(private myHttpService: MyHttpService) { }

  ngOnInit() {
    this.myHttpService.getData()
      .subscribe(
        (data: any) => console.log(data)
      );
  }

  onSubmit(username: string, email: string) {
    this.myHttpService.sendData(
      {
        username: username,
        email: email
      })
      .subscribe(
        (data) => console.log(data),
        (error) => console.log(error)
      );
  }

  onGetData() {
    this.myHttpService.getOwnData()
      .subscribe(data => {
        const myArray = [];
        for (const key in data) {
          if (data.hasOwnProperty(key)) {
            myArray.push(data[key]);
          }
        }
        this.items = myArray;
      });
  }
}
