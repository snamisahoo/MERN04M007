console.log("Welcome to variable second class");

//var, let, const
// The way of declaration.

//*var
//only declaration
var a;
console.log(a)

//only declaration of variable using var keyword is possible

//only initialization

a=10;
console.log(a)

//only initialization is possible

var b=20;
console.log(b)

//both initialization and declaration is possible.

var b;
console.log(b)

var b=30;
console.log(b)

//redeclaration and re-initialization is possible.


//let keyword
//only declaration

let name;
console.log(name)//possible

fullName="smruti"
console.log(fullName)

//both
let abc=20;
console.log(abc)

// let fullName;
//re-declaration is not possible.
//both redeclaration and initialization is not possible.

//const
//only declaration
//const age;  //not possible

//only initialization is  not possible.
//both declaration and initialization.

const age=30;
console.log(age)

// age=40;
// console.log(age)// re-initialization is not possible

// {
//     let email="abc2gmail.com";
// }console.log(email)
// let email="xyz2gmail.com";
// console.log(email) 


//hoesting concept and TDZ(temporal Dead Zone) :- When we declare any value uing var keyword it will host that mean it goes to the top.

console.log("first",email)
var email="abc@gmail.com";
console.log("second",email)

//DATA TYPE


//PRIMITIVE : 

// 1-number
// 2-string
// 3-boolean
// 4-undefined
// 5-null
// 6-bigint
// 7-symbol

//number

let personAge=40;
console.log(personAge)
console.log(typeof personAge)

//string

let personName="Namita Sahoo"
console.log(personName)
console.log(typeof personName)

//boolean

let isMarried=true;
console.log(isMarried)
console.log(typeof isMarried)

//undefined

let village=undefined;
console.log(village)
console.log(typeof village)

//null

let personHaveMoney=null;
console.log(personHaveMoney)
console.log(typeof personHaveMoney)
console.log(typeof typeof personHaveMoney)

//bigint

let personMobileNo=BigInt(842935632856561)
console.log(personHaveMoney)
console.log(typeof personHaveMoney)

//symbol

let personFaceStructure=Symbol("@")
console.log(personFaceStructure)
console.log(typeof personFaceStructure)

//NON-PRIMITIVE : 
// 1-object
// 2-array.

//object : 

let obj={
    name:"namita",
    age:19,
    email:"namita@gmail.com",
    phoneNo:83271272312973
}
console.log(obj)
console.log(obj.name)
console.log(obj.age)
console.log(obj["phoneNo"])
console.log(typeof obj)
console.log(obj.password)
console.log(typeof typeof obj)
console.log(typeof obj.phoneNo)


//array :

let arr=[1,2,3,4,5,"qlith",{name:"IIno",age:30,email:"inno@gmail.com",arr:["namita",30,7234719410]}];
console.log(arr)
console.log(typeof arr)
console.log(typeof arr[4])
console.log(arr[5])
console.log(arr[6])
console.log(typeof arr[6])
console.log(arr[6].name)
// console.log(arr[7])
