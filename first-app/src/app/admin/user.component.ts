import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-user',
  template: `
    <h2>User Page Header !</h2>
    <a [routerLink]="['detail']">Detail</a>
    <a [routerLink]="['edit']">Edit</a>
    <button (click)="onNavigate()">Go Home</button>
    {{id}}
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class UserComponent implements OnInit, OnDestroy {
  private id: number;
  private subscription: Subscription;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.subscription = activatedRoute.params.subscribe(
      (param: any) => this.id = param['id']
    );
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onNavigate() {
    this.router.navigate(['/'], {queryParams: {'analytic': '100'}});
  }

}
