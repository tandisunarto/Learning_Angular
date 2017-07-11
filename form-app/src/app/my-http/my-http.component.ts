import { Component, OnInit } from '@angular/core';
import { MyHttpService } from './my-http.service';
import { Response } from '@angular/http';

@Component({
  selector: 'app-my-http',
  templateUrl: './my-http.component.html',
  styles: [],
  providers: [MyHttpService]
})
export class MyHttpComponent implements OnInit {

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
        (data) => console.log(data)
      );
  }
}
