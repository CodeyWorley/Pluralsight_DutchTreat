(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "../$$_lazy_route_resource lazy recursive":
/*!*******************************************************!*\
  !*** ../$$_lazy_route_resource lazy namespace object ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../node_modules/raw-loader/index.js!./app/app.component.html":
/*!***********************************************************!*\
  !*** ../node_modules/raw-loader!./app/app.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-lg-9\">\r\n        <h3>{{ title }}</h3>\r\n        <product-list></product-list>\r\n    </div>\r\n    <div class=\"col-md-3\">\r\n        <the-cart></the-cart>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../node_modules/raw-loader/index.js!./app/shop/cart.component.html":
/*!*****************************************************************!*\
  !*** ../node_modules/raw-loader!./app/shop/cart.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>Shopping Cart</h3>\r\n<div>Subtotal: {{ data.order.subtotal | currency:\"USD\":true }}</div>\r\n<table class=\"table table-condensed table-hover\">\r\n    <thead>\r\n        <tr>\r\n            <td>Product</td>\r\n            <td>#</td>\r\n            <td>Price</td>\r\n            <td>Total</td>\r\n        </tr>\r\n    </thead>\r\n    <tbody>\r\n        <tr *ngFor=\"let o of data.order.items\">\r\n            <td>{{ o.productCategory }} - {{ o.productTitle }}</td>\r\n            <td>{{ o.quantity }}</td>\r\n            <td>{{ o.unitPrice | currency:\"USD\":true }}</td>\r\n            <td>{{ (o.unitPrice * o.quantity) | currency:\"USD\":true }}</td>\r\n        </tr>\r\n    </tbody>\r\n</table>"

/***/ }),

/***/ "../node_modules/raw-loader/index.js!./app/shop/productList.component.html":
/*!************************************************************************!*\
  !*** ../node_modules/raw-loader!./app/shop/productList.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n\r\n    <div class=\"product-info col-md-4\" *ngFor=\"let p of products\">\r\n        <div class=\"card bg-light p-1 m-1\">\r\n            <img src=\"/img/{{ p.artId }}.jpg\" class=\"img-fluid\" [alt]=\"p.title\"/>\r\n            <div class=\"product-name\">{{ p.category  }} - {{ p.size }}</div>\r\n            <ul class=\"product-props list-unstyled\">\r\n                <li>Price: {{ p.price | currency:\"USD\":true }}</li>\r\n                <li>Artist: {{ p.artist }}</li>\r\n                <li>Title: {{ p.title }}</li>\r\n                <li>Description: {{ p.artDescription }}</li>\r\n            </ul>\r\n            <button id=\"buy-button\" class=\"btn btn-success btn-sm pull-right\" (click)=\"addProduct(p)\" >Buy</button>\r\n        </div>\r\n    </div>\r\n\r\n</div>"

/***/ }),

/***/ "./app/app.component.ts":
/*!******************************!*\
  !*** ./app/app.component.ts ***!
  \******************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'Dutch Treat';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'the-shop',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "../node_modules/raw-loader/index.js!./app/app.component.html")
    })
], AppComponent);



/***/ }),

/***/ "./app/app.module.ts":
/*!***************************!*\
  !*** ./app/app.module.ts ***!
  \***************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "../node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./app/app.component.ts");
/* harmony import */ var _shop_productList_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shop/productList.component */ "./app/shop/productList.component.ts");
/* harmony import */ var _shop_cart_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shop/cart.component */ "./app/shop/cart.component.ts");
/* harmony import */ var _shared_dataService__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/dataService */ "./app/shared/dataService.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "../node_modules/@angular/common/fesm2015/http.js");








let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
            _shop_productList_component__WEBPACK_IMPORTED_MODULE_4__["ProductList"],
            _shop_cart_component__WEBPACK_IMPORTED_MODULE_5__["Cart"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"]
        ],
        providers: [
            _shared_dataService__WEBPACK_IMPORTED_MODULE_6__["DataService"]
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./app/shared/dataService.ts":
/*!***********************************!*\
  !*** ./app/shared/dataService.ts ***!
  \***********************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "../node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "../node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _order__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./order */ "./app/shared/order.ts");





let DataService = class DataService {
    constructor(http) {
        this.http = http;
        this.order = new _order__WEBPACK_IMPORTED_MODULE_4__["Order"]();
        this.products = [];
    }
    loadProducts() {
        return this.http.get("/api/products")
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((data) => {
            this.products = data;
            return true;
        }));
    }
    addToOrder(product) {
        let item = this.order.items.find(i => i.productId == product.id);
        if (item) {
            item.quantity++;
        }
        else {
            item = new _order__WEBPACK_IMPORTED_MODULE_4__["OrderItem"]();
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
    }
};
DataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
], DataService);



/***/ }),

/***/ "./app/shared/order.ts":
/*!*****************************!*\
  !*** ./app/shared/order.ts ***!
  \*****************************/
/*! exports provided: Order, OrderItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Order", function() { return Order; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderItem", function() { return OrderItem; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "../node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);

class Order {
    constructor() {
        this.orderDate = new Date();
        this.items = new Array();
    }
    get subtotal() {
        return lodash__WEBPACK_IMPORTED_MODULE_0__["sum"](lodash__WEBPACK_IMPORTED_MODULE_0__["map"](this.items, i => i.unitPrice * i.quantity));
    }
    ;
}
class OrderItem {
}


/***/ }),

/***/ "./app/shop/cart.component.ts":
/*!************************************!*\
  !*** ./app/shop/cart.component.ts ***!
  \************************************/
/*! exports provided: Cart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cart", function() { return Cart; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_dataService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/dataService */ "./app/shared/dataService.ts");



let Cart = class Cart {
    constructor(data) {
        this.data = data;
    }
};
Cart = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "the-cart",
        template: __webpack_require__(/*! raw-loader!./cart.component.html */ "../node_modules/raw-loader/index.js!./app/shop/cart.component.html")
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_dataService__WEBPACK_IMPORTED_MODULE_2__["DataService"]])
], Cart);



/***/ }),

/***/ "./app/shop/productList.component.css":
/*!********************************************!*\
  !*** ./app/shop/productList.component.css ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".product-info img {\r\n    max-width: 100px;\r\n    float: left;\r\n    margin: 0 2px;\r\n    border: solid 1px black;\r\n}\r\n\r\n.product-info .product-name {\r\n    font-size: large;\r\n    font-weight: bold;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNsaWVudC9hcHAvc2hvcC9wcm9kdWN0TGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxhQUFhO0lBQ2IsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGlCQUFpQjtBQUNyQiIsImZpbGUiOiJDbGllbnQvYXBwL3Nob3AvcHJvZHVjdExpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9kdWN0LWluZm8gaW1nIHtcclxuICAgIG1heC13aWR0aDogMTAwcHg7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIG1hcmdpbjogMCAycHg7XHJcbiAgICBib3JkZXI6IHNvbGlkIDFweCBibGFjaztcclxufVxyXG5cclxuLnByb2R1Y3QtaW5mbyAucHJvZHVjdC1uYW1lIHtcclxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufSJdfQ== */"

/***/ }),

/***/ "./app/shop/productList.component.ts":
/*!*******************************************!*\
  !*** ./app/shop/productList.component.ts ***!
  \*******************************************/
/*! exports provided: ProductList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductList", function() { return ProductList; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_dataService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/dataService */ "./app/shared/dataService.ts");



let ProductList = class ProductList {
    constructor(data) {
        this.data = data;
        this.products = [];
    }
    ngOnInit() {
        this.data.loadProducts()
            .subscribe(success => {
            if (success) {
                this.products = this.data.products;
            }
        });
    }
    addProduct(product) {
        this.data.addToOrder(product);
    }
};
ProductList = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "product-list",
        template: __webpack_require__(/*! raw-loader!./productList.component.html */ "../node_modules/raw-loader/index.js!./app/shop/productList.component.html"),
        styles: [__webpack_require__(/*! ./productList.component.css */ "./app/shop/productList.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_dataService__WEBPACK_IMPORTED_MODULE_2__["DataService"]])
], ProductList);



/***/ }),

/***/ "./environments/environment.ts":
/*!*************************************!*\
  !*** ./environments/environment.ts ***!
  \*************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./main.ts":
/*!*****************!*\
  !*** ./main.ts ***!
  \*****************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "../node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***********************!*\
  !*** multi ./main.ts ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Codey\Projects\dotnet\Pluralsight\DutchTreat\DutchTreat\Client\main.ts */"./main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map