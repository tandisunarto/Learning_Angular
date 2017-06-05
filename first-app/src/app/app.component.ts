import { Component, OnDestroy } from '@angular/core';
import { TemperatureService } from 'app/services/temperature.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnDestroy {
  title = 'App Works !';
  searchMessage = '';
  currentDateTime: Date;
  param: string;

  private subscription: Subscription;

  constructor(private temperatureService: TemperatureService, private router: Router) {
    this.subscription = router.routerState.root.queryParams.subscribe(
      (queryParam: any) => this.param = queryParam['analytic'])
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

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
