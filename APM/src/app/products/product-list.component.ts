import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { Product } from './product';
import { ProductService } from './product.service';

@Component({
    moduleId: module.id,
    selector: 'pm-products',
    templateUrl: 'product-list.component.html',
    styleUrls: ['product-list.component.css']
})
export class ProductListComponent implements OnInit
{
    pageTitle: string = 'Product List';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    listFilter: string;
    products: IProduct[];
    // products: IProduct[] = [
    //     {
    //         "productId": 2,
    //         "productName": "Garden Cart",
    //         "productCode": "GDN-0023",
    //         "releaseDate": "March 18, 2016",
    //         "description": "15 gallon capacity rolling garden cart",
    //         "price": 32.99,
    //         "starRating": 4.2,
    //         "imageUrl": "http://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png"
    //     },
    //     {
    //         "productId": 5,
    //         "productName": "Hammer",
    //         "productCode": "TBX-0048",
    //         "releaseDate": "May 21, 2016",
    //         "description": "Curved claw steel hammer",
    //         "price": 8.9,
    //         "starRating": 4.8,
    //         "imageUrl": "http://openclipart.org/image/300px/svg_to_png/73/rejon_Hammer.png"
    //     }
    // ];
    // ** if we choose to use the class that implement IProduct as the static type **
    // products: Product[] = [
    //     new Product(
    //         2,
    //         "Garden Cart",
    //         "GDN-0023",
    //         "March 18, 2016",
    //         "15 gallon capacity rolling garden cart",
    //         32.99,
    //         4.2,
    //         "http://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png"),
    //     new Product(
    //         5,
    //         "Hammer",
    //         "TBX-0048",
    //         "May 21, 2016",
    //         "Curved claw steel hammer",
    //         8.9,
    //         4.8,
    //         "http://openclipart.org/image/300px/svg_to_png/73/rejon_Hammer.png")
    // ];

    // private _productService: ProductService;
    // constructor(productService: ProductService) {
    //     this._productService = productService;
    // }
    constructor(private _productService: ProductService) { }

    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    ngOnInit(): void {
        this.products = this._productService.getProducts();
    }

    onRatingClicked(message: string): void {
        this.pageTitle = "Product List: " + message;
    } 
}