import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { ProductModule } from './products/product.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './home/welcome.component';

// import { ProductListComponent } from './products/product-list.component';
// import { ProductDetailComponent } from './products/product-detail.component';
// import { ProductFilterPipe } from './products/product-filter.pipe';
// import { StarComponent } from './shared/star.component';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent
  ],
  imports: [
    ProductModule,
    BrowserModule,
    HttpModule,
    RouterModule.forRoot([
      { path: 'welcome', component: WelcomeComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: '**', redirectTo: 'welcome', pathMatch: 'full' },
    ])
  ],
  providers: [ ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
