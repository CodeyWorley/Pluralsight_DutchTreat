var StoreCustomer = /** @class */ (function () {
    function StoreCustomer(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.visits = 0;
    }
    StoreCustomer.prototype.showName = function () {
        alert(this.firstName + " " + this.lastName);
    };
    Object.defineProperty(StoreCustomer.prototype, "name", {
        set: function (val) {
            this.ourName = val;
        },
        enumerable: true,
        configurable: true
    });
    StoreCustomer.prototype.getName = function () {
        return this.ourName;
    };
    return StoreCustomer;
}());
//# sourceMappingURL=storecustomers.js.map