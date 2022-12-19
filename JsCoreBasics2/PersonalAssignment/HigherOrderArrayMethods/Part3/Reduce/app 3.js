//The reduce() method creates a new array, executing the callback passed into it on every element, and outputs a single value. It does something on every element and keeps a record of the calculations in an accumulator variable and when no more elements are left, it returns the accumulator.

// The reduce() function itself takes two inputs: (a) the reducer function or callback; (b) an optional starting point or initialValue.

// The reducer function or the callback accepts 4 arguments: accumulator, currentItem, index, array.index and array are optional 

// If the optional initialValue is given, the accumulator at the first iteration will be equal to the initialValue and the currentItem will be equal to the first element in the array.Otherwise, the accumulator would be equal to the first item in the input array, and the currentItem will be equal to the second item in the array.

// Syntax:
// reduce((previousValue, currentValue) => { /* ... */ }, initialValue)

const numList = [1,2,3,4,5] 
//                      (accumulator, currentItem)              
const sumUp = numList.reduce((preV,curV)=>preV + curV)
console.log(sumUp);//15

// now if we do this with our initial value starting at 0 we will get the same thing back 
//                      (accumulator, currentItem)    ,initial Value
const sumUp2 = numList.reduce((preV, curV) => preV + curV,0)
console.log(sumUp2);//15 
// now lets change our initial value to 10 and see what we get 
// meaning the start will be 10 then every element will be added to that initial start value 
const sumUp3 = numList.reduce((preV, curV) => preV + curV,10)
console.log(sumUp3);//25 

// we can also reduce certian properties from a objArray 
const givenArray = [
    { "name": "Shanghai", "population": 24300000 },
    { "name": "Los Angeles", "population": 3792621 },
    { "name": "New Delhi", "population": 21800000 },
    { "name": "Mumbai", "population": 18400000 },
    { "name": "Chicago", "population": 2695598 },
    { "name": "Houston", "population": 2100263 },
];

// lets reduce the population property
//for objects properties you will need to set the initial value 
const totalPopulation = givenArray.reduce((preV, curV)=>{
    return preV + curV.population
},0)
console.log(totalPopulation);//73088482
                                    
const allNames = givenArray.reduce((preV, curV) => preV + curV.name+ ' ,', '')
console.log(allNames);//Shanghai ,Los Angeles ,New Delhi ,Mumbai ,Chicago ,Houston ,

// now lets clean this example up so we dont get a coma at the end

const allNames2 = givenArray.reduce((preV, curV, index, array) => index === array.length - 1 ? preV + curV.name : preV + curV.name + ' ,', '')
//now we dont have the last coma 
console.log(allNames2); //Shanghai, Los Angeles, New Delhi, Mumbai, Chicago, Houston 
