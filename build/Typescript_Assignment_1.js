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
