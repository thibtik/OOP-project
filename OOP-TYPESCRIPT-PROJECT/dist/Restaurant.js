"use strict";
exports.__esModule = true;
exports.Restaurant = void 0;
var RoomManager_1 = require("./room/RoomManager");
var HumanManager_1 = require("./human/HumanManager");
var CalendarManager_1 = require("./calendar/CalendarManager");
var MealManager_1 = require("./meal/MealManager");
var orderManager_1 = require("./order/orderManager");
var Restaurant = /** @class */ (function () {
    function Restaurant(name, address) {
        this.calendar = new CalendarManager_1.CalendarManager();
        this.rooms = new RoomManager_1.RoomManager();
        this.hr = new HumanManager_1.HumanManager();
        this.meal = new MealManager_1.MealManager();
        this.order = new orderManager_1.OrderManager();
        this.address = address;
        this.name = name;
    }
    return Restaurant;
}());
exports.Restaurant = Restaurant;
