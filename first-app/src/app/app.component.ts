import { Component } from '@angular/core';
import { TemperatureService } from "app/services/temperature.service";

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'app works!';
  searchMessage = '';
  currentDateTime: Date;

  constructor(private temperatureService: TemperatureService) { }

  get BrowserUserAgent(): string {
    return navigator.userAgent;
  }

  onClickedTwo(value: string){
    alert(value + ' ' + this.temperatureService.celcius2fahrenheit(38) + 'F');
  }

  onSearchClick(value: string){
    this.searchMessage = value;
  }

  onShowTime(value: Date) {
    this.currentDateTime = value;
  }
}
