const email = 'mr.ylraihan@gmail.com'
const userName = 'wallie001'

if(email.includes('@') && userName.length >6){
console.log(true);
}else{
   console.log(false);
}

const arr1 = [1,2,3,4,5]
const obj = {one:1, two:2}

console.log(arr1);//[1, 2, 3, 4, 5]
console.log(obj);//{one: 1, two: 2}

// this Array method isArray check if the variable passed in is an array or not
// it will return a boolean value 
console.log(Array.isArray(arr1));//true
console.log(Array.isArray(obj));//false

// Array.from() creates a shallow copy array instance from an array-like or iterable 
const arr2 = Array.from(arr1)

console.log(arr2);//[1, 2, 3, 4, 5]
arr2.pop()
// as you see here this will copy the array not just the reference pointer, because when we pop from arr2 it doesnt affect arr1
console.log(arr2);//[1, 2, 3, 4]
console.log(arr1);//[1, 2, 3, 4, 5]
// lets try the other way around and see
arr1.pop()
arr1.pop()
console.log(arr1);//[1, 2, 3]
console.log(arr2);//[1, 2, 3,4]

//now lets see with the spread operator

const arr3 = [...arr1]
console.log(arr3);//[1,2,3]
arr3.unshift(0)
console.log(arr3);//[0, 1, 2, 3]
console.log(arr1);//[1,2,3]


//Object destructuring and array destructuring 

const [a,b,...c]= arr3
console.log(a);//0
console.log(b);//1
console.log(c);//[2,3]

const obj2 = {one:1, two:2}
const {one, two} = obj2
console.log(one);
console.log(two);
const {one:d, two:e} = obj2
console.log(d, e);