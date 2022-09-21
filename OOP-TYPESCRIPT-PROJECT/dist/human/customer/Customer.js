"use strict";
exports.__esModule = true;
exports.Customer = exports.CustomerCategory = void 0;
var CustomerCategory;
(function (CustomerCategory) {
    CustomerCategory[CustomerCategory["CUSTOMER_VIP"] = 0] = "CUSTOMER_VIP";
    CustomerCategory[CustomerCategory["COSTOMER_NORMAL"] = 1] = "COSTOMER_NORMAL";
})(CustomerCategory = exports.CustomerCategory || (exports.CustomerCategory = {}));
;
var Customer = /** @class */ (function () {
    function Customer(category, id) {
        this.category = category;
        this.id = id;
    }
    Customer.prototype.getCustomerCategory = function () {
        return this.category;
    };
    return Customer;
}());
exports.Customer = Customer;
