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
exports.Food = void 0;
var Meal_1 = require("./Meal");
var Food = /** @class */ (function (_super) {
    __extends(Food, _super);
    function Food(foodCategory, name, price) {
        var _this = _super.call(this, foodCategory, name, price) || this;
        _this.foodCategory = foodCategory;
        return _this;
    }
    return Food;
}(Meal_1.Meal));
exports.Food = Food;
