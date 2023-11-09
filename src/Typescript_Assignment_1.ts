
function Problem1(param:string|number){
    if(typeof param === "string"){
        return param.length;
    }else if(typeof param === "number"){
        return param*param;
    }
}

console.log(Problem1("Sourav"));
console.log(Problem1(2));







