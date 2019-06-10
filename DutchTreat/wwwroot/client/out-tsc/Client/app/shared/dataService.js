import * as tslib_1 from "tslib";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs/operators";
import { Order, OrderItem } from "./order";
let DataService = class DataService {
    constructor(http) {
        this.http = http;
        this.order = new Order();
        this.products = [];
    }
    loadProducts() {
        return this.http.get("/api/products")
            .pipe(map((data) => {
            this.products = data;
            return true;
        }));
    }
    addToOrder(product) {
        let item;
        item = new OrderItem();
        item.productId = product.id;
        item.productArtist = product.artist;
        item.productArtId = product.artId;
        item.productCategory = product.category;
        item.productSize = product.size;
        item.productTitle = product.title;
        item.unitPrice = product.price;
        item.quantity = 1;
        this.order.items.push(item);
    }
};
DataService = tslib_1.__decorate([
    Injectable(),
    tslib_1.__metadata("design:paramtypes", [HttpClient])
], DataService);
export { DataService };
//# sourceMappingURL=dataService.js.map