"use strict";
exports.__esModule = true;
exports.RoomManager = void 0;
var DiningRoom_1 = require("./diningRoom/DiningRoom");
var RoomManager = /** @class */ (function () {
    function RoomManager() {
        this.diningRooms = [];
        this.kitchenRoom = [];
    }
    RoomManager.prototype.getVIPRoom = function () {
        var rooms = [];
        for (var _i = 0, _a = this.diningRooms; _i < _a.length; _i++) {
            var room = _a[_i];
            if (room.getRoomCatetory() == DiningRoom_1.RoomCategory.VIPROOM) {
                var vipRoom = room;
                rooms.push(vipRoom);
            }
        }
        return rooms;
    };
    RoomManager.prototype.addDiningRoom = function () {
        var room = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            room[_i] = arguments[_i];
        }
        this.diningRooms = this.diningRooms.concat(room);
    };
    RoomManager.prototype.addKitchenRoom = function () {
        var kichenRoom = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            kichenRoom[_i] = arguments[_i];
        }
        this.kitchenRoom = this.kitchenRoom.concat(kichenRoom);
    };
    RoomManager.prototype.getVIPRoomFree = function () {
        var vipRooms = this.getVIPRoom();
        for (var _i = 0, vipRooms_1 = vipRooms; _i < vipRooms_1.length; _i++) {
            var room = vipRooms_1[_i];
            if (room.getCustomerBooked() === undefined) {
                return room;
            }
        }
        return undefined;
    };
    RoomManager.prototype.addCustomerVIP = function (customerBooked) {
        var room = this.getVIPRoomFree();
        if (room !== undefined) {
            room.setCustomerBooked(customerBooked);
        }
    };
    return RoomManager;
}());
exports.RoomManager = RoomManager;
