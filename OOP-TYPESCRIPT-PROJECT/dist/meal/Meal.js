"use strict";
exports.__esModule = true;
exports.Meal = exports.MealCategory = void 0;
var MealCategory;
(function (MealCategory) {
    MealCategory[MealCategory["MEAL"] = 0] = "MEAL";
    MealCategory[MealCategory["DRINK"] = 1] = "DRINK";
    MealCategory[MealCategory["Dessert"] = 2] = "Dessert";
})(MealCategory = exports.MealCategory || (exports.MealCategory = {}));
var Meal = /** @class */ (function () {
    function Meal(vitaulsCategory, name, price) {
        this.vitaulsCategory = vitaulsCategory;
        this.name = name;
        this.price = price;
    }
    Meal.prototype.getPrice = function () {
        return this.price;
    };
    return Meal;
}());
exports.Meal = Meal;
