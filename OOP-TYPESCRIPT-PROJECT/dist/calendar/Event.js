"use strict";
exports.__esModule = true;
exports.Event = void 0;
var Event = /** @class */ (function () {
    function Event(start, end) {
        this.start = start;
        this.end = end;
    }
    ;
    Event.prototype.hasEvent = function (other) {
        var result = false;
        if (this.start.getTime() < other.start.getTime() && this.end.getTime() > other.end.getTime()) {
            result = true;
        }
        return result;
    };
    return Event;
}());
exports.Event = Event;
