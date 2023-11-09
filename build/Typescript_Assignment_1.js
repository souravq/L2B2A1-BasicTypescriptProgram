"use strict";
//Problem 1:
// Design a TypeScript function that takes a parameter of a union type (e.g., string | number). If it's a string, return its length. If it's a number, return the square of that number.
function findLengthOrSquare(param) {
    if (typeof param === "string") {
        return param.length;
    }
    else if (typeof param === "number") {
        return param * param;
    }
    return 0;
}
console.log(findLengthOrSquare("Sourav")); //6
console.log(findLengthOrSquare(2)); //4
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
console.log(getAddressCity(personObj)); //Kolkata
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
console.log(isCat(cat)); //yes, it's a cat.
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
console.log(getTotal(mixedData)); // 9
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
console.log(combineTypes(car, driver)); //{make: 'Tata',model: 'Tata Nano',year: '2012',name: 'Sourav',licenseNumber: 'WB50XX1136'}
//==========================
// Problem 6:
// Write a TypeScript function that takes a parameter of type unknown and uses a type guard to check whether the parameter is an array of numbers. If it is, calculate the sum of the numbers and log it. If it's not, log an error message.
function addArrayNumbers(arrayParam) {
    let total = 0;
    if (Array.isArray(arrayParam)) {
        for (let data of arrayParam) {
            if (typeof data == "number") {
                total += data;
            }
            else {
                return "Array's all elements are not number!!!";
            }
        }
    }
    return total;
}
console.log(addArrayNumbers([1, 2, 3, 4, "5"])); //Array's all elements are not number!!!
//=======================
// Problem 7:
// Create a TypeScript function called findFirstOccurrence that accepts an array and a value to search for. Use generics to make the function work with arrays of any data type. Inside the function, find and return the index of the first occurrence of the value in the array. If the value is not found in the array, return -1 to indicate that. Create sample arrays of different data types (e.g., numbers, strings) and call the findFirstOccurrence function for each of them to display the results.
// Example usage:
// const numbers: number[] = [1, 2, 3, 4, 5, 2];
// const strings: string[] = ["apple", "banana", "cherry", "date", "apple"];
// const targetNumber = 2;
// const targetString = "cherry";
// const indexInNumbers = findFirstOccurrence(numbers, targetNumber);
// const indexInStrings = findFirstOccurrence(strings, targetString);
// console.log(indexInNumbers); //output:  1
// console.log(indexInStrings); //output: 2
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
console.log(indexInNumbers); //output:  1
console.log(indexInStrings); //output: 2
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
console.log(calculateCartCost(cartArr)); //8000
//==========================================
