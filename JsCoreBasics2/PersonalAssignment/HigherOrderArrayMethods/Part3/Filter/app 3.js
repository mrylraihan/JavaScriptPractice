// The filter() method creates a shallow copy of a portion of a given array, filtered down to just the elements from the given array that pass the test implemented by the provided function.

// it will run the call back on each element and if ity passes the boolean condition then it will keep it in the resulting array 

const numList = [1,2,3,4,5,6]
//we only want the number greater then 3
const numbersGreater3 = numList.filter(ele=>ele>3)
console.log(numbersGreater3);//[ 4, 5, 6 ]
console.log(numList);//with modifying or changing the existing array [1, 2, 3, 4, 5, 6]

// we can also do it with objects 

const givenArray = [
    { "name": "Shanghai", "population": 24300000 },
    { "name": "Los Angeles", "population": 3792621 },
    { "name": "New Delhi", "population": 21800000 },
    { "name": "Mumbai", "population": 18400000 },
    { "name": "Chicago", "population": 2695598 },
    { "name": "Houston", "population": 2100263 },
];

const populationOver5 = givenArray.filter(ele => ele.population > 5000000)
console.log(populationOver5);
//[{ name: 'Shanghai', population: 24300000 },{ name: 'New Delhi', population: 21800000 },{ name: 'Mumbai', population: 18400000}]

// now if we know we are working on just on property of the object we can use object destructuring
const populationOver = givenArray.filter(({population})=> population> 19000000)
console.log(populationOver);
/*
[
  { name: 'Shanghai', population: 24300000 },
  { name: 'New Delhi', population: 21800000 }
]
*/

// you can filter by letters as well

const noneStartingWithL = givenArray.filter(({name})=>name[0]!=='L')
console.log(noneStartingWithL);
// we removed the element starting with L which was Los Angeles
// [
//     { name: 'Shanghai', population: 24300000 },
//     { name: 'New Delhi', population: 21800000 },
//     { name: 'Mumbai', population: 18400000 },
//     { name: 'Chicago', population: 2695598 },
//     { name: 'Houston', population: 2100263 }
// ]