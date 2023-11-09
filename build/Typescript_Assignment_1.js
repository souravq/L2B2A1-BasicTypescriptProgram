"use strict";
// Problem 1
function findLengthOrSquare(param) {
    if (typeof param === "string") {
        return param.length;
    }
    else if (typeof param === "number") {
        return param * param;
    }
    return 0;
}
function getAddressCity(param) {
    var _a;
    return (_a = param.address) === null || _a === void 0 ? void 0 : _a.city;
}
const personObj = {
    name: "Sourav",
    age: 25,
    address: {
        city: "Kolkata",
        street: "NH6"
    }
};
// Problem 3
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
// Problem 4
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
// Problem 5
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
// Problem 6
function addArrayNumbers(arrayParam) {
    let total = 0;
    if (Array.isArray(arrayParam)) {
        for (let data of arrayParam) {
            if (typeof data == "number") {
                total += data;
            }
            else {
                console.log("Array's all elements are not number!!!");
            }
        }
    }
    console.log(total);
}
// Problem 7:
function findFirstOccurrence(arrayParam, target) {
    for (let i = 0; i < arrayParam.length; i++) {
        if (arrayParam[i] === target) {
            return i;
        }
    }
    return -1;
}
const numbers = [1, 2, 3, 4, 5, 2];
const strings = ["apple", "banana", "cherry", "date", "apple"];
const targetNumber = 2;
const targetString = "cherry";
const indexInNumbers = findFirstOccurrence(numbers, targetNumber);
const indexInStrings = findFirstOccurrence(strings, targetString);
function calculateCartCost(arrayParam) {
    let totalCost = 0;
    arrayParam.forEach((product) => {
        totalCost += product.price;
    });
    return totalCost;
}
const cartArr = [
    {
        name: "Phone",
        price: 1000,
        quantity: 2
    },
    {
        name: "Book",
        price: 2000,
        quantity: 2
    },
    {
        name: "Laptop",
        price: 5000,
        quantity: 2
    }
];
