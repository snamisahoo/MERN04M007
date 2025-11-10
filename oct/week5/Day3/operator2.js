console.log("Today is teh second class of operator.")

let num1=2;
let num2=3;
console.log(num1 + num2 /2 * 4)
console.log({} == {})
console.log([] == [])
console.log(undefined == undefined)
console.log(null == null)
console.log(undefined == {})
console.log(undefined == [])
console.log(undefined == null)

console.log("false" && "it is true.")
console.log(true && true)

//CONDITIONAL STATEMENTS  : 
//TO IMPLEMENT SOME CONDITION IN THE CODE.

if(false)
{
    console.log("this will execute only if the condition is true")
}
else{
    console.log("this will execute if the condition is false")
}


if(true)
    console.log("first")


// if(false){

// }else if(false){

// }else{

// }


//(condition ? "if true" : "if false")
console.log(false ? "the condition is true" : "the condition is false")


if(2){
    console.log("it is 2")
}


if(undefined){
    console.log("it is 4")
}

// let a=2;
// if ((a>1)&&(a++<4))
// {

//     console.log(a)

// }

let a=2;
if ((a<1)&&(a++<4))
{

    console.log(a)

}else{
    
console.log(a)
}

// const num=prompt("enter a no.")
// if(num%5==0){
//     console.log("it is a multiple of 5")

// }else{
//     console.log("not a multiple of 5")
// }

const mark=prompt("Enter the mark")
if (mark>=80 && mark<=100){
    console.log("The grade is A")
}else if(mark>=70 && mark<=79){
    console.log("The grade is B")
}else if(mark>=60 && mark<=69){
    console.log("The grade is C")
}else if(mark>=50 && mark<=59){
    console.log("The grade is D")
}else if(mark>=0 && mark<=49){
    console.log("The grade is F")
}
else
    console.log("Invalid no.")