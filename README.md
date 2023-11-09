1) What are some benefits of using TypeScript over JavaScript in a project?

Typechecking is the primary advantage of TypeScript. By adding static typing to the language, we can catch many of these type-related problems at Compile time. 
TypeScript has better IDE support (VScode Editor), and it provides type information.
Typescript helps us create large-scale Applications. It helps to write modular and Maintainable Code.


2) What is the purpose of the optional chaining (?.) and nullish coalescing (??) operators in TypeScript, and how do they work? Provide an example for each

-> Optional Chaining (?.)

 When we access some property of an object, that time we manually check whether the properties exist or not.
 But using the Optional Chaining we can safely access properties of Obejct. It won't give any error if one of the properties is undefined or null.

let personObj={
    name: "Sourav",
    age:25,
    address:{
        city: "Kolkata",
        street: "NH6"
    }

}

//Without optional chaining 

const city = personObj.address && personObj.address.city;

// With optional chaining 

const city2 = personObj.address?.city;


->nullish Operator(??)

The nullish coalescing (??) operator in TypeScript is used to provide a default value for a variable if its current value is null or undefined.
let data: string | null | undefined = null;
let result = data ?? "Hello World";

console.log(result); // Output: "Hello World"


3) How do you handle asynchronous operations in TypeScript, and what are the advantages of using async/await over callbacks or Promises?.

Asynchronous operations in TypeScript can be handled using callbacks, Promises, or async/await.
Advantages->
Async/await provides a more procedural syntax that makes asynchronous code look similar to synchronous code.
Better error handling capabilities.


4) How can you use TypeScript's enums, and what are their advantages?.
TypeScript's enums are a way to define a set of named constants.
Advantages->
Type safety purpose.
Readability -> Enums make your code more readable by giving meaningful names to the constants, making it clear what the values represent.

5) Explain the role of type guards in TypeScript and provide an example of a custom type guard.
   
Type guards in TypeScript are used to narrow down the type of a variable within a certain block of code.
TypeScript can detect and prevent runtime errors that may occur due to incorrect types
function isNumber(value: any): value is number {
    return typeof value === 'number';
}

6) Can you give an example of how to use "readonly" properties in TypeScript?
   
class Person {
    readonly name: string;
    
    constructor(name: string) {
      this.name = name;
    }
  }
  
  let person = new Person("John");
  
  now if we set person.name = "something" , it will give error.
  
7) Explain what a union type is in TypeScript and provide an example of its usage.

TypeScript can combine one or two different types of data (i.e., number, string, etc.) in a single type,

let data : string|number;
data = "Hello World";
data = 7;
