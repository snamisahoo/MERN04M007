1.anonymous Function

a function which has no name 

syntax :

   (){

 // function code 
}

2.Named Function

A function with name is called as named function

Syntax :

function functionName(parameters) {

// function body

}

3 . Function with expression

It is the way to execute the anonymous function Passing whole anonymous function as a value to a variable is known as function with expression.

EX: let x=function(){

//block of code

}

x();

4.Nested function

A function which is declared inside another function is known as nested function. Nested functions are unidirectional .

i.e., We can access parent function properties in child function but vice-versa is not possible.

EX:

Function parent(){

let a=10;

function child(){

let b=20;

console.log(a+b);

}

child ();

}

parent ();

A **closure** is created when a **function is defined inside another function** and it **retains access to the outer function's variables**, even after the outer function has finished executing.

JavaScript currying

Calling a child function along with parent by using one more parenthesis is known as java script currying

Example:

Function parent () {

let a=10;

function child () {

let b=20;

console.log(a+b);

}

return child;

}

parent () ();     —>JavaScript currying