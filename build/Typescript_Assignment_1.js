"use strict";
//Problem 1:
// Design a TypeScript function that takes a parameter of a union type (e.g., string | number). If it's a string, return its length. If it's a number, return the square of that number.
function Problem1(param) {
    if (typeof param === "string") {
        return param.length;
    }
    else if (typeof param === "number") {
        return param * param;
    }
    return 0;
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
// Problem 4:
// You got a list that has numbers and words mixed together. Your job is to make a function that will take the list as an argument and return the total by adding them up.
// To solve this in TypeScript, you'll look at each thing in the list named mixedData, which looks like this: [1, 'two', 3, 'four', 5]. You'll go through the list, find the numbers, and add them together.
// Every time you find a number in the list, you'll add it to a total. You'll start at zero and then keep adding the numbers you find. If no number is found in the list return 0. To make sure TypeScript knows these things are numbers, you'll use type assertions.
const mixedData = [1, 'two', 3, 'four', 5];
function getTotal(mixedDataParam) {
    let total = 0;
    mixedDataParam.forEach((data) => {
        if (typeof data == "number") {
            total += data;
        }
    });
    return total;
}
console.log(getTotal(mixedData));
//=====================
// Problem 5:
// Define two interfaces: Car with properties like make, model, and year, and Driver with properties like name and licenseNumber. Create a function that takes two objects of type Car and Driver and returns an object with the combined properties of both types.
class Car {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
}
const car = new Car("Tata", "Tata Nano", "2012");
class Driver {
    constructor(name, licenseNumber) {
        this.name = name;
        this.licenseNumber = licenseNumber;
    }
}
const driver = new Driver("Sourav", "WB50XX1136");
function combineTypes(carParam, driverParam) {
    return Object.assign(Object.assign({}, carParam), driverParam);
}
console.log(combineTypes(car, driver));
//==========================
