
function Problem1(param:string|number){
    if(typeof param === "string"){
        return param.length;
    }else if(typeof param === "number"){
        return param*param;
    }
}

console.log(Problem1("Sourav"));
console.log(Problem1(2));


//======================

// Create an interface called Person with optional properties address and phone. The address property itself will be another object containing city and street properties. Implement a function named getAddressCity that takes an argument of type Person and returns the city from the address property of the Person object. Use optional chaining to prevent any type errors.


interface Person{
    name:string;
    age:number;
    address?:{
        city: string;
        street: string;
    };
    phone?: number;
}

function getAddressCity(param:Person){
    return param.address?.city;
}

let personObj:Person={
    name:"Sourav",
    age:25,
    address:{
        city:"Kolkata",
        street:"NH6"
    }

}

console.log(getAddressCity(personObj));

//===================================
// Problem 3:

// Create a type guard function isCat that checks if an object is an instance of a Cat class. If it does, the function says "yes, it's a cat." If it doesn't match, the function says "no, it's not a cat."

class Cat{
    name:string;
    color:string;
    constructor(name:string,color:string){
        this.name = name;
        this.color = color;
    }
}

const cat = new Cat("TOM", "Black & White");

function isCat(param:Cat){
    if(param instanceof Cat){
        return "yes, it's a cat.";
    }else{
        return "no, it's not a cat.";
    }
}

console.log(isCat(cat));

//===========================

// Problem 4:

// You got a list that has numbers and words mixed together. Your job is to make a function that will take the list as an argument and return the total by adding them up.

// To solve this in TypeScript, you'll look at each thing in the list named mixedData, which looks like this: [1, 'two', 3, 'four', 5]. You'll go through the list, find the numbers, and add them together.

// Every time you find a number in the list, you'll add it to a total. You'll start at zero and then keep adding the numbers you find. If no number is found in the list return 0. To make sure TypeScript knows these things are numbers, you'll use type assertions.

const mixedData:(number|string)[] = [1, 'two', 3, 'four', 5];

function getTotal(mixedDataParam:(number|string)[]){
    let total = 0;
    mixedDataParam.forEach((data)=>{
        if(typeof data == "number"){
            total+=data;
        }
    })
    return total;
}

console.log(getTotal(mixedData));

//=====================










