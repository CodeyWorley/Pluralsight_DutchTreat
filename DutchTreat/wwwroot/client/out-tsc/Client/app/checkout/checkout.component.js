import * as tslib_1 from "tslib";
import { Component } from "@angular/core";
import { DataService } from '../shared/dataService';
import { Router } from '@angular/router';
let Checkout = class Checkout {
    constructor(data, router) {
        this.data = data;
        this.router = router;
        this.errorMessage = "";
    }
    onCheckout() {
        this.data.checkout()
            .subscribe(success => {
            if (success) {
                this.router.navigate(["/"]);
            }
        }, err => this.errorMessage = "Failed to save order");
    }
};
Checkout = tslib_1.__decorate([
    Component({
        selector: "checkout",
        templateUrl: "checkout.component.html",
        styleUrls: ['checkout.component.css']
    }),
    tslib_1.__metadata("design:paramtypes", [DataService, Router])
], Checkout);
export { Checkout };
//# sourceMappingURL=checkout.component.js.map