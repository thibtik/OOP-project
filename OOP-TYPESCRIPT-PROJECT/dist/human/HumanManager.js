"use strict";
exports.__esModule = true;
exports.HumanManager = void 0;
var Customer_1 = require("./customer/Customer");
var HumanManager = /** @class */ (function () {
    function HumanManager() {
        this.customer = [];
        this.staffs = [];
    }
    HumanManager.prototype.addCustomer = function () {
        var customer = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            customer[_i] = arguments[_i];
        }
        this.customer = this.customer.concat(customer);
    };
    HumanManager.prototype.getCustomer = function () {
        return this.customer;
    };
    HumanManager.prototype.getCustomerVIP = function () {
        var vipCustomer = [];
        var customers = this.customer;
        customers.forEach(function (customer) {
            if (customer.getCustomerCategory() === Customer_1.CustomerCategory.CUSTOMER_VIP) {
                vipCustomer.push(customer);
            }
        });
        return vipCustomer;
    };
    HumanManager.prototype.getCustomerNormal = function () {
        var normalCustomer = [];
        var customers = this.customer;
        customers.forEach(function (customer) {
            if (customer.getCustomerCategory() == Customer_1.CustomerCategory.COSTOMER_NORMAL) {
                normalCustomer.push(customer);
            }
        });
        return normalCustomer;
    };
    HumanManager.prototype.addStaff = function () {
        var staff = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            staff[_i] = arguments[_i];
        }
        this.staffs = this.staffs.concat(staff);
    };
    HumanManager.prototype.getStaffs = function () {
        return this.staffs;
    };
    return HumanManager;
}());
exports.HumanManager = HumanManager;
;
