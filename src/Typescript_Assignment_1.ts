
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









