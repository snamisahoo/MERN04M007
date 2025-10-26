console.log("Today we are going to lear variable");

let a=10;
console.log(a)

let A=20;
console.log(A);

let a1=10;
console.log(a1);

let _=50;
console.log(_);

let $=30;
console.log($);

let $name1=10;
console.log($name1);

// let console=10;
// console.log(console);

// var
// declaration
//! declaration at global level

var name="xyz";//here the variable is declared globally.
console.log(name);
{
    console.log(name);//here we can access the global variable in local level.
}

function access(){
    console.log(name);
}
access()

//! declaration in block level...
{
    var email="namita@gmail.com"
    console.log(email);
}
console.log(email);


//if a we declare variable in block level i can access inside block, i can access outside the block, i can access inside a function.

//!declaration at fuction level

function declaration_variable(){
    var pass="123a";
    console.log(pass);
}
declaration_variable()

//if i declare a variable in function we can access in the function but not outside the fuction, not in block 


//let keyword
//declaration

//declaration at gloval level.

let fullName="Namita";
console.log(fullName);

// if i declare the variable inside the global level using the let keyword we can access the variable in anywhere.

//declaration at block level.

{
    let nickName="michi";
    console.log(nickName);

}
//console.log(nickName);

// if i declare the variable inside the function , we can access variable inside the fuction, we can't the variable outside the fuction because of the 'let' restriction. 

//! declaration at function level
 
function declaration_let(){
    var passs="12233a";
    console.log(passs);
}
declaration_let()
// console.log(passs);/

//if i declare the variable insid eteh function by using the let keyword only we can  access the variable inside the function only, we can't access the variable outside the function.  


//const
//declaration
//! global level declaration.

const veg="potato";
console.log(veg);

//if i declare the variable inside the global level using const keyword, i can access the variable in anywhere

//! declaration at block level.

{
    const flower="rose";
    console.log(flower);
}

// if we declare the variable using const keyword inside teh block level, we can access the variable inside the block only, we can't access the const variable outside from the block..

// declaration at fuction lavel

function declare_functionlevel_const(){
    const animal=" cat rabbit";
    console.log(animal);
}declare_functionlevel_const()

//the way of declaration