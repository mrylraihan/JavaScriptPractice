//includes 
// this returns a boolean and is a fast way to check if your ele is in the array
// this works better with primitive values 
const numberList = [1,2,3,4,5];

console.log(numberList.includes(3));//returns true



const personalData = [{age:22},{age:34}];

console.log(personalData.includes({ age: 22 }))//returns false 