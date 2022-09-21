"use strict";
exports.__esModule = true;
exports.Person = exports.Gender = void 0;
var Gender;
(function (Gender) {
    Gender[Gender["MALE"] = 0] = "MALE";
    Gender[Gender["FEMALE"] = 1] = "FEMALE";
})(Gender = exports.Gender || (exports.Gender = {}));
var Person = /** @class */ (function () {
    function Person(id, name, age, gender, phone) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.phone = phone;
    }
    return Person;
}());
exports.Person = Person;
