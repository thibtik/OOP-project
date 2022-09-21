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
exports.DiningRoom = exports.RoomCategory = void 0;
var Room_1 = require("../Room");
var RoomCategory;
(function (RoomCategory) {
    RoomCategory[RoomCategory["VIPROOM"] = 0] = "VIPROOM";
    RoomCategory[RoomCategory["NORMALROOM"] = 1] = "NORMALROOM";
})(RoomCategory = exports.RoomCategory || (exports.RoomCategory = {}));
var DiningRoom = /** @class */ (function (_super) {
    __extends(DiningRoom, _super);
    function DiningRoom(id, roomCategory) {
        var _this = _super.call(this, id) || this;
        _this.roomCategory = roomCategory;
        _this.table = [];
        return _this;
    }
    DiningRoom.prototype.isEqual = function (other) {
        if (this.table.length == other.table.length &&
            this.id == other.id &&
            this.roomCategory == other.roomCategory) {
            return true;
        }
        return false;
    };
    DiningRoom.prototype.addTable = function () {
        var _a;
        var table = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            table[_i] = arguments[_i];
        }
        this.table = (_a = this.table).concat.apply(_a, table);
    };
    DiningRoom.prototype.getTable = function () {
        return this.table;
    };
    DiningRoom.prototype.isAllTablesFree = function () {
        var result = true;
        var tables = this.table;
        for (var _i = 0, tables_1 = tables; _i < tables_1.length; _i++) {
            var table = tables_1[_i];
            if (!table.tableNoCustomer()) {
                result = false;
            }
        }
        return result;
    };
    DiningRoom.prototype.getRoomCatetory = function () {
        return this.roomCategory;
    };
    DiningRoom.prototype.getMaxNumberCustomer = function () {
        var tables = this.table;
        var max = 0;
        for (var _i = 0, tables_2 = tables; _i < tables_2.length; _i++) {
            var table = tables_2[_i];
            max += table.getNumberOfCustomers();
        }
        return max;
    };
    return DiningRoom;
}(Room_1.Room));
exports.DiningRoom = DiningRoom;
