let a, b, rest;
[a, b] = [10, 20];

console.log(a);
// expected output: 10

console.log(b);
// expected output: 20

[a, b, ...rest] = [10, 20, 30, 40, 50];

console.log(rest);
// expected output: Array [30,40,50]

let fName, lName;
// [,,]the way this will destructure is by index
// so because we passed the ,, that means we will skip that index
[fName, , lName] = ['Wayel', 'Nageeb', 'Raihan']
console.log(fName); // Wayel
console.log(lName); //Raihan

// no destructing objects 
const test1 = {name:'wallie', age:30}
const {name, age} = test1
console.log(name);//wallie
console.log(age);//age
// now what if you want to assign them alias because of a name conflict in your code

const test2 = {name:'Heshow', age:30}
// when desturcturing we can use alias by assigning in teh object the {prevValueName : newValueName} which is what we see below
const {name:name2, age:age2} = test2
console.log(name2);//Heshow
console.log(age2);//30