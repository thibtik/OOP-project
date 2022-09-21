"use strict";
exports.__esModule = true;
exports.OrderManager = void 0;
var OrderManager = /** @class */ (function () {
    function OrderManager() {
        this.orders = [];
    }
    OrderManager.prototype.getAllOrder = function () {
        return this.orders;
    };
    OrderManager.prototype.addOrder = function () {
        var other = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            other[_i] = arguments[_i];
        }
        this.orders = this.orders.concat(other);
    };
    OrderManager.prototype.getAllOrderADay = function (date) {
        var orders = [];
        for (var _i = 0, _a = this.orders; _i < _a.length; _i++) {
            var order = _a[_i];
            if (order.isDayEqual(date)) {
                orders.push(order);
            }
        }
        return orders;
    };
    OrderManager.prototype.getPriceADay = function (date) {
        var orders = this.getAllOrderADay(date);
        var totalPrice = 0;
        if (orders !== undefined) {
            for (var _i = 0, orders_1 = orders; _i < orders_1.length; _i++) {
                var order = orders_1[_i];
                totalPrice += order.getPriceFromOrder();
            }
        }
        return totalPrice;
    };
    OrderManager.prototype.getFoodADay = function (date) {
        var meal = [];
        var orders = this.getAllOrderADay(date);
        if (orders !== undefined) {
            for (var _i = 0, orders_2 = orders; _i < orders_2.length; _i++) {
                var order = orders_2[_i];
                var mealOfOneOrder = order.getMeal();
                for (var _a = 0, mealOfOneOrder_1 = mealOfOneOrder; _a < mealOfOneOrder_1.length; _a++) {
                    var item = mealOfOneOrder_1[_a];
                    meal.push(item);
                }
            }
        }
        return meal;
    };
    return OrderManager;
}());
exports.OrderManager = OrderManager;
