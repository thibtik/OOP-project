"use strict";
exports.__esModule = true;
exports.CalendarManager = void 0;
var CalendarManager = /** @class */ (function () {
    function CalendarManager() {
        this.customerBooked = [];
    }
    CalendarManager.prototype.getCustomerBooked = function () {
        return this.customerBooked;
    };
    CalendarManager.prototype.addCustomerBook = function (other) {
        this.customerBooked.push(other);
    };
    CalendarManager.prototype.getEventRooms = function () {
        var rooms = [];
        var customerBookeds = this.customerBooked;
        customerBookeds.forEach(function (customerBooked) {
            rooms.push(customerBooked.getRoom());
        });
        return rooms;
    };
    return CalendarManager;
}());
exports.CalendarManager = CalendarManager;
