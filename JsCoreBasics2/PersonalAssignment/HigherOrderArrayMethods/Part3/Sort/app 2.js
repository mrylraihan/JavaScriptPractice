// Sort 
// when sorting primitives you can just use the .sort() with no callback
// sort is kinda funny because it changes teh existing array
// now if  you want to sort but store it in a separate array you will need to copy it 
const months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort();
console.log(months);//[ 'Dec', 'Feb', 'Jan', 'March' ]


const months2 = ['March', 'Jan', 'Feb', 'Dec'];
const copyMonth2 = [...months2]
copyMonth2.sort()
console.log(months2);//['March', 'Jan', 'Feb', 'Dec']
console.log(copyMonth2);//['Dec', 'Feb', 'Jan', 'March']

const numList = [5,2,4,3,1]
numList.sort()
console.log(numList);//[ 1, 2, 3, 4, 5 ]

// now let say you have double digits javascript starts to get confused 

const numList2 = [5, 2, 4, 3, 1,11]
numList2.sort()
console.log(numList2);//[ 1, 11, 2, 3, 4, 5 ]
// now to fix this when we sort double digits we need to write a callback, because javascript is checking the bit code and sorting that way 
numList2.sort((a,b)=>a-b)
console.log(numList2);//[ 1, 2, 3, 4, 5, 11 ]
// now lets reverse it
numList2.sort((a, b) => b - a)
console.log(numList2)//[ 11, 5, 4, 3, 2, 1 ]

// we can do the same with strings 

const wordList = ['Wallie', 'sandwich', 'Cat']
// wordList.sort()//or we can use a callback to sort strings
wordList.sort((a, b) => (a < b ? -1 : a > b ? 1 : 0))
console.log(wordList);// 'Cat', 'Wallie', 'sandwich' ]
// if we want to reverse this we need a callback
wordList.sort((a, b) => a > b ? -1 : a < b ? 1 : 0)
console.log(wordList);//[ 'sandwich', 'Wallie', 'Cat' ]


const nameList = [
    {name:'Meshia', age:34},
    {name:'Wallie', age:30},
    {name:'Heshow', age:30},
]

const sortByAge = nameList.sort((a,b)=>a.age-b.age)
console.log(sortByAge);
//sorted by name
/*
[
  { name: 'Wallie', age: 30 },
  { name: 'Heshow', age: 30 },
  { name: 'Meshia', age: 34 }
]
*/

// if we want to sort by name
const sortbyName = nameList.sort((a, b) => a.name < b.name ? -1 : a.name > b.name ? 1 : 0)
console.log(sortbyName);
/*
[
  { name: 'Heshow', age: 30 },
  { name: 'Meshia', age: 34 },
  { name: 'Wallie', age: 30 }
]
*/
