"use strict";
exports.__esModule = true;
exports.Table = void 0;
var Table = /** @class */ (function () {
    function Table(id, numberOfCustomers) {
        this.id = id;
        this.numberOfCustomers = numberOfCustomers;
        this.customers = [];
    }
    Table.prototype.isTableFree = function () {
        var result = false;
        if (this.customers.length < this.numberOfCustomers) {
            result = true;
        }
        return result;
    };
    Table.prototype.tableNoCustomer = function () {
        if (this.customers.length == 0) {
            return true;
        }
        return false;
    };
    Table.prototype.addCustomerNormal = function () {
        var _a;
        var customerNormal = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            customerNormal[_i] = arguments[_i];
        }
        if (this.isTableFree()) {
            this.customers = (_a = this.customers).concat.apply(_a, customerNormal);
        }
    };
    Table.prototype.addCustomerVIP = function () {
        var _a;
        var customerVIP = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            customerVIP[_i] = arguments[_i];
        }
        if (customerVIP.length < this.numberOfCustomers) {
            this.customers = (_a = this.customers).concat.apply(_a, customerVIP);
        }
    };
    Table.prototype.getNumberOfCustomers = function () {
        return this.numberOfCustomers;
    };
    return Table;
}());
exports.Table = Table;
