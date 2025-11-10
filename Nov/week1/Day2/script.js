console.log("Today we are going to lran about String mothods");
let str="Hello";
console.log(str[0])

//method
//to get the indexing value


console.log(str.at(0));
console.log(str.charAt(1))

//string interpolation


// let animal="dog";
// console.log(this is :${animal});
//interpolation

//concat()


console.log("Hello hey "+"BYE bye "+30)
console.log("hello".concat(" bye"))

//trim()


let str1="Qlith   ";
console.log(str1.length)
console.log(str1.trim().length)

let str2="Ql ith   ";
console.log(str2.length)
console.log(str2.trim().length)

//it will only trim the space present at the begning anad end but not in between.


//trimEnd()


let str3="        Ql ith   ";
console.log(str3.length)
console.log(str3.trimEnd().length)

//it only trim the extra space at the end


//trimStart()


let str4="     Ql ith   ";
console.log(str4.length)
console.log(str4.trimStart().length)
//it only trim the extra space at the begning


//Replace()

let str5="QLith";
console.log(str5.replace("L","l"))
console.log(str5)


//replaceAll()


let desc="This is my cat. His name is MICHI. My cat has two baby";
console.log(desc.replaceAll("cat","dog"))

//replaces all the "cat" present and repalce it with "dog"


//toString()


let num=20;
console.log(num)
console.log(num.toString())
console.log(typeof num)


//slice()


let string="This is Qlith office";
console.log(string.slice(2,6));


let string1="This is Qlith office";
console.log(string1.slice(2));//here if only one  index no. is given then it will start from the given index no. and slice it upto the end index.
console.log(string1.slice(4,2))//always starting index must be less then the ending index
console.log(string1.slice(5,6))//empty


//split()


let strArr=string.split(" ");
let strArr1=string.split("");
let strArr2=string.split("i")
console.log(strArr)
console.log(strArr1)
console.log(strArr2)