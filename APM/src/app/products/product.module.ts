import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';

import { ProductListComponent } from './product-list.component';
import { ProductFilterPipe } from './product-filter.pipe';
import { ProductDetailComponent } from './product-detail.component';
import { ProductService } from './product.service';

import { ProductDetailGuardService } from './product-guard.service';

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild([
            { path: 'products', component: ProductListComponent },
            { path: 'product/:id',
                canActivate: [ProductDetailGuardService],
                component: ProductDetailComponent
            },
        ])
    ],
    exports: [],
    declarations: [
        ProductListComponent,
        ProductFilterPipe,
        ProductDetailComponent        
    ],
    providers: [
        ProductService,
        ProductDetailGuardService,
    ],
})
export class ProductModule { }
