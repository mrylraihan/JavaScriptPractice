// The forEach method is similar to the 
// for (let i = 0; i < array.length, i++) { 

// } 
// syntax.It loops through the array and runs the given callback for each of the elements of the array.
const arr1 = [1,2,3,4,5,6]

arr1.forEach(ele=>console.log(ele))

//this will log every in arr

// let try to sum everything up 

let total = 0

arr1.forEach(ele=>total+=ele)
console.log(total);// this will return 21

// now let see if we can do the same while assign it to the array
// now if we do like this we get undefined and that because by assign it like this we are saying total1 is equal to the return value of arr1.forEach(ele=>total1+=ele) which there is no return value 
let total1= 0
total1 = arr1.forEach(ele=>total1+=ele)
console.log(total1);//undefined