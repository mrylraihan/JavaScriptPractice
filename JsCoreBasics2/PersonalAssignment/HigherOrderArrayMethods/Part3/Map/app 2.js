// This is one of the simplest functions you are going to use while working with Arrays.It forms a new array by calling the function passed into it as an argument, on each and every element of the Array.It will map each of the return values of the callback and create a new array.

// The callback passed to the map() function can accept any of the three arguments: item, index, array. the last two are optional

// The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.

const array1 = [1,2,3,4,5]

const mapArray1 = array1.map(ele=>ele+1)
//now this is looping through the array and on each element adding 1, and with each result pushing it to a new array which is why we can store it in mapArray1 because unlike forEach map expects a return value

console.log(mapArray1);//[2, 3, 4, 5, 6]

// map also doesnt affect the original array
console.log(array1);[1, 2, 3, 4, 5]


// we can do the same thing with having strings and turning them in objects 

const nameArray = ['Wallie', 'Heshow', 'Amel']

const employeeArray = nameArray.map((ele,idx)=> {
    return {name:ele, id:idx+1}
})

console.log(employeeArray);
/*
[
{ name: 'Wallie', id: 1 },
{ name: 'Heshow', id: 2 },
{ name: 'Amel', id: 3 }
]
*/
// again with out affecting the original array 
console.log(nameArray);//['Wallie', 'Heshow', 'Amel']

// let see with an object array 

const objArray = [
    {name:'Wayel', age:30},
    {name:'Hisham', age:30},
    {name:'Meshia', age:34}
]

// 
const newObjArray = objArray.map(ele=>ele.name)
console.log(newObjArray);//[ 'Wayel', 'Hisham', 'Meshia' ]
console.log(objArray);//doesnt change the 
/*
[
  { name: 'Wayel', age: 30 },
  { name: 'Hisham', age: 30 },
  { name: 'Meshia', age: 34 }
]
*/

//we get the same array back , now lets add a property
const newObjArray2 = objArray.map((ele, idx)=>{
    // another way to solve this is by assigning the value to the property 
    // then returning the whole object
    // ele.id = idx +1
    // return ele 
   return {...ele, id:idx+1} 
})
console.log(newObjArray2);
