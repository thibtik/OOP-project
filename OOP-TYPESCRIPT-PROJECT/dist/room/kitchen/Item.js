"use strict";
exports.__esModule = true;
exports.Item = exports.ItemCategory = void 0;
var ItemCategory;
(function (ItemCategory) {
    ItemCategory[ItemCategory["INGREDIENT"] = 0] = "INGREDIENT";
    ItemCategory[ItemCategory["MATERIAL"] = 1] = "MATERIAL";
})(ItemCategory = exports.ItemCategory || (exports.ItemCategory = {}));
var Item = /** @class */ (function () {
    function Item(name, price, category) {
        this.name = name;
        this.price = price;
        this.category = category;
    }
    return Item;
}());
exports.Item = Item;
