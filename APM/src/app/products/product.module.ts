import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ProductListComponent } from './product-list.component';
import { ProductFilterPipe } from './product-filter.pipe';
import { ProductDetailComponent } from './product-detail.component';
import { StarComponent } from '../shared/star.component';
import { ProductService } from './product.service';

import { ProductDetailGuardService } from './product-guard.service';

@NgModule({
    imports: [
        FormsModule,
        CommonModule,
        RouterModule.forChild([
            { path: 'products', component: ProductListComponent },
            {
                path: 'product/:id',
                canActivate: [ProductDetailGuardService],
                component: ProductDetailComponent
            },
        ])
    ],
    exports: [],
    declarations: [
        ProductListComponent,
        ProductFilterPipe,
        ProductDetailComponent,
        StarComponent
    ],
    providers: [
        ProductService,
        ProductDetailGuardService,
    ],
})
export class ProductModule { }
