//Sorting method on arrays 
//its Numbers first(9), then Capital letters second (W), then lowerCase letters(a)

//Sorting mixed types
const a = ['Dom', 'apple', 'bottle', 59];

// a.sort(); this will sort your array but it also returns a newly sorted array
const sortedA = a.sort();

console.log(a);//[ 'apple', 'bottle', 'dom' ]
console.log(sortedA);//[ 'apple', 'bottle', 'dom' ]


//sorting numbers
const n = [3,5,2,7];
const sortedN = n.sort();
console.log(n);//[2, 3, 5, 7]
console.log(sortedN);//[2, 3, 5, 7]


//sorting objects

const people = [
    {
        name:'Dom',
        age:55
    },
    {
        name:'Wallie',
        age:40
    }, 
    {
        name:'mike',
        age:33
    }
];

const sortedByAge = people.sort((a,b)=>{
    return a.age - b.age;
});

console.log(sortedByAge);//[{ name: 'mike', age: 33 },{ name: 'Wallie', age:
//40 },{ name: 'Dom', age: 55 }]

//changing a string to an array then sorting it 
const str = "wallie";
const wordArray = Array.from(str).sort();
console.log(wordArray);

console.log();