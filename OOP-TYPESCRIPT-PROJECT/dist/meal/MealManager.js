"use strict";
exports.__esModule = true;
exports.MealManager = void 0;
var MealManager = /** @class */ (function () {
    function MealManager() {
        this.meal = [];
    }
    MealManager.prototype.addMeal = function () {
        var meal = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            meal[_i] = arguments[_i];
        }
        this.meal = this.meal.concat(meal);
    };
    return MealManager;
}());
exports.MealManager = MealManager;
