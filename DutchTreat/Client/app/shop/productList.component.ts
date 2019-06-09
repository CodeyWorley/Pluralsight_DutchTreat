import { Component } from "@angular/core";

@Component({
    selector: "product-list",
    templateUrl: "productList.component.html",
    styleUrls: []
})
export class ProductList {
    public products = [
        {
            title: "first",
            price: 19.99
        },
        {
            title: "sec",
            price: 11.99
        },
        {
            title: "third",
            price: 14.99
        }
    ];
}