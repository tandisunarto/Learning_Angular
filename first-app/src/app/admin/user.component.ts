import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  template: `
    <h2>User Page Header !</h2>
    <a [routerLink]="['/user']">User</a>
    <button (click)="onNavigate()">Go Home</button>
  `,
  styles: []
})
export class UserComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onNavigate() {
    this.router.navigate(['/']);
  }

}
