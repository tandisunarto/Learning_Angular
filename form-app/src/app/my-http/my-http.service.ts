import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http'
import 'rxjs/Rx';
import { Observable } from "rxjs/Rx";

@Injectable()
export class MyHttpService {

  constructor(private http: Http) { }

  getData() {
    return this.http.get('https://angular2-lesson-a04a9.firebaseio.com/title.json')
      .map((response: Response) => response.json());
  }

  sendData(user: any) {
    const body = JSON.stringify(user);
    const headerData = new Headers();
    headerData.append('Content-Type', 'application/json');
    // const headerData = new Headers({'Content-Type': 'application/json'});
    return this.http.post('https://angular2-lesson-a04a9.firebaseio.com/data.json', body,
    {
      headers: headerData
    })
    .map((data: Response) => data.json())
    .catch(this.handleError);
  }

  getOwnData() {
    return this.http.get('https://angular2-lesson-a04a9.firebaseio.com/data.json')
      .map((response: Response) => response.json());
  }

  handleError(error: any) {
    console.log(error);
    return Observable.throw(error.json());
  }
}
