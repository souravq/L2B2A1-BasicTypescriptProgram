"use strict";
function Problem1(param) {
    if (typeof param === "string") {
        return param.length;
    }
    else if (typeof param === "number") {
        return param * param;
    }
}
console.log(Problem1("Sourav"));
console.log(Problem1(2));
function getAddressCity(param) {
    var _a;
    return (_a = param.address) === null || _a === void 0 ? void 0 : _a.city;
}
let personObj = {
    name: "Sourav",
    age: 25,
    address: {
        city: "Kolkata",
        street: "NH6"
    }
};
console.log(getAddressCity(personObj));
//===================================
// Problem 3:
// Create a type guard function isCat that checks if an object is an instance of a Cat class. If it does, the function says "yes, it's a cat." If it doesn't match, the function says "no, it's not a cat."
class Cat {
    constructor(name, color) {
        this.name = name;
        this.color = color;
    }
}
const cat = new Cat("TOM", "Black & White");
function isCat(param) {
    if (param instanceof Cat) {
        return "yes, it's a cat.";
    }
    else {
        return "no, it's not a cat.";
    }
}
console.log(isCat(cat));
//===========================
