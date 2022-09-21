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
exports.CustomerBooked = void 0;
var Event_1 = require("./Event");
var CustomerBooked = /** @class */ (function (_super) {
    __extends(CustomerBooked, _super);
    function CustomerBooked(customerVIP, room, start, end) {
        var _this = _super.call(this, start, end) || this;
        _this.customerVIP = customerVIP;
        _this.room = room;
        _this.waiters = [];
        return _this;
    }
    CustomerBooked.prototype.addWaiter = function () {
        var waiter = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            waiter[_i] = arguments[_i];
        }
        this.waiters = this.waiters.concat(waiter);
    };
    CustomerBooked.prototype.getRoom = function () {
        return this.room;
    };
    return CustomerBooked;
}(Event_1.Event));
exports.CustomerBooked = CustomerBooked;
