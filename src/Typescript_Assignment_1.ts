// Problem 1

function findLengthOrSquare(param:string|number):number{
    if(typeof param === "string"){
        return param.length;
    }else if(typeof param === "number"){
        return param*param;
    }
    return 0;
}

// Problem 2

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

const personObj:Person={
    name:"Sourav",
    age:25,
    address:{
        city:"Kolkata",
        street:"NH6"
    }

}

// Problem 3

class Cat{
    name:string;
    color:string;
    constructor(name:string,color:string){
        this.name = name;
        this.color = color;
    }
}

const cat = new Cat("TOM", "Black & White");

function isCat(param:Cat):string{
    if(param instanceof Cat){
        return "yes, it's a cat.";
    }else{
        return "no, it's not a cat.";
    }
}

// Problem 4

const mixedData:(number|string)[] = [1, 'two', 3, 'four', 5];

function getTotal(mixedDataParam:(number|string)[]):number{
    let total = 0;
    mixedDataParam.forEach((data)=>{
        if(typeof data == "number"){
            total+=data;
        }
    })
    return total;
}

// Problem 5

class Car{
    make:string;
    model:string;
    year:string;
    constructor(make:string,model:string,year:string){
        this.make = make;
        this.model = model;
        this.year = year;
    }
}

const car = new Car("Tata","Tata Nano","2012");

class Driver{
    name:string;
    licenseNumber:string;
    constructor(name:string, licenseNumber:string) {
        this.name = name;
        this.licenseNumber = licenseNumber;
    }
}

const driver = new Driver("Sourav","WB50XX1136");

function combineTypes(carParam:Car, driverParam:Driver):(Car|Driver){
    return {...carParam,...driverParam};
}

// Problem 6

function addArrayNumbers(arrayParam:unknown){
    let total=0;
    if(Array.isArray(arrayParam)){
        for(let data of arrayParam){
            if(typeof data == "number"){
                total+=data;
            }else{
                console.log("Array's all elements are not number!!!");
            }
        }
    }
    console.log(total);
}


// Problem 7:

function findFirstOccurrence<S>(arrayParam:Array<S>,target:S):number{
    for(let i=0; i<arrayParam.length; i++){
        if(arrayParam[i] === target){
            return i;
        }
    }
    return -1;
}

const numbers: number[] = [1, 2, 3, 4, 5, 2];

const strings: string[] = ["apple", "banana", "cherry", "date", "apple"];

const targetNumber = 2;

const targetString = "cherry";

const indexInNumbers = findFirstOccurrence(numbers, targetNumber);

const indexInStrings = findFirstOccurrence(strings, targetString);


// Problem 8:

interface Product{
    name:string;
    price:number;
    quantity:number;
}

function calculateCartCost(arrayParam:Product[]):number{
    let totalCost = 0;
    arrayParam.forEach((product)=>{
        totalCost+=product.price;
    })
    return totalCost;
}

const cartArr:Product[]=[
    {
        name:"Phone",
        price:1000,
        quantity: 2
    },
    {
        name:"Book",
        price:2000,
        quantity: 2
    },
    {
        name:"Laptop",
        price:5000,
        quantity: 2
    }
];





