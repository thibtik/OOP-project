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
exports.Kitchen = void 0;
var Room_1 = require("../Room");
var Kitchen = /** @class */ (function (_super) {
    __extends(Kitchen, _super);
    function Kitchen(id) {
        var _this = _super.call(this, id) || this;
        _this.material = [];
        _this.ingredient = [];
        return _this;
    }
    Kitchen.prototype.addMaterial = function () {
        var material = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            material[_i] = arguments[_i];
        }
        this.material = this.material.concat(material);
    };
    Kitchen.prototype.addIngredient = function () {
        var ingredient = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            ingredient[_i] = arguments[_i];
        }
        this.ingredient = this.ingredient.concat(ingredient);
    };
    return Kitchen;
}(Room_1.Room));
exports.Kitchen = Kitchen;
