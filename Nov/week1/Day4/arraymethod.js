console.log("Today we will learn about array method");

let arr=[1,2,3,4,5]
console.log(arr)

let arrObj=new Array(6,7,8,9)
console.log(arrObj)

console.log(Array(3).fill("js"));//create a array of length 3. And fil  keyword fill the empty spaces.

console.log(Array.of(1,2,3,4,5,6,7,8,9));//

console.log(Array.from("abdhsjss"));//store the string in index format.

//manipulation method : 

//push
arr.push(6);
console.log(arr)//add element at the end of the array.

//push method can add any datatype value.
arr.push(7,8,9,"hello",true)
console.log(arr)

//adding value at the begning:
arr.unshift(0,"bye");
console.log(arr)

//pop : removing element at the end
arr.pop();
console.log(arr)

for(let i=1;i<=5;i++){
    arr.pop()
}console.log(arr)

//removing element at the starting...
arr.shift();
console.log(arr)

//slice : 
console.log(arr.includes(7));//To check weather that value is present at in tha array.

console.log(arr[1]);//to get the value at the index.

console.log(arr.indexOf(5))//gives the index no. of teh given value if present.

console.log(Array.isArray(arr))//it check if it is array or not.

console.log(arr.toReversed())//revers the value present in the array and return the array. 
console.log(arr)

let numArr=[3,5,1,0];
// console.log([3,5,1,0].sort())
//sort() : arrenge the value present in the array in smaller value to larger value.. (only changes happen in original array)

console.log(numArr.toSorted())
console.log(numArr)

console.log(arr)
console.log(arr.slice(2,5))

arr.splice(0,2,"Hii",4,5,6,7)
console.log(arr)

console.log(arr.join(""))
console.log(arr.toString(""))
console.log([[1,2],[3,4],[5,6]].flat())