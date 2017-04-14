import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'app works!';
  searchMessage = '';

  get BrowserUserAgent(): string {
    return navigator.userAgent;
  }

  onClickedTwo(value: string){
    alert(value);
  }

  onSearchClick(value: string){
    this.searchMessage = value;
  }
}