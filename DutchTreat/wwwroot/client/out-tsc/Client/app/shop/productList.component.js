import * as tslib_1 from "tslib";
import { Component } from "@angular/core";
let ProductList = class ProductList {
    constructor() {
        this.products = [
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
};
ProductList = tslib_1.__decorate([
    Component({
        selector: "product-list",
        templateUrl: "productList.component.html",
        styleUrls: []
    })
], ProductList);
export { ProductList };
//# sourceMappingURL=productList.component.js.map