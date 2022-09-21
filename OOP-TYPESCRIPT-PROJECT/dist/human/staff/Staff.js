"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Staff = exports.StaffCategory = void 0;
var Person_1 = require("../Person");
var StaffCategory;
(function (StaffCategory) {
    StaffCategory[StaffCategory["CHEF"] = 0] = "CHEF";
    StaffCategory[StaffCategory["RECEPTIONIST"] = 1] = "RECEPTIONIST";
    StaffCategory[StaffCategory["SECURITY"] = 2] = "SECURITY";
    StaffCategory[StaffCategory["MANAGER"] = 3] = "MANAGER";
    StaffCategory[StaffCategory["CLEANER"] = 4] = "CLEANER";
    StaffCategory[StaffCategory["DISHWASHER"] = 5] = "DISHWASHER";
    StaffCategory[StaffCategory["WAITRON"] = 6] = "WAITRON";
    StaffCategory[StaffCategory["Cashier"] = 7] = "Cashier";
})(StaffCategory = exports.StaffCategory || (exports.StaffCategory = {}));
var Staff = /** @class */ (function (_super) {
    __extends(Staff, _super);
    function Staff(category, id, name, age, gender, phone) {
        var _this = _super.call(this, id, name, age, gender, phone) || this;
        _this.category = category;
        _this.salary = 0;
        return _this;
    }
    Staff.prototype.setSalary = function (salary) {
        this.salary = salary;
    };
    Staff.prototype.getSalary = function () {
        return this.salary;
    };
    Staff.prototype.getCatetory = function () {
        return this.category;
    };
    return Staff;
}(Person_1.Person));
exports.Staff = Staff;
