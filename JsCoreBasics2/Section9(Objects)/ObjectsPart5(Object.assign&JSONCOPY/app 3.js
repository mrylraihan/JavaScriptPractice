//Understanding Object.assign 

//this is one way with the spread operator but still with out the nested properties
// and use th espread operator to make a deeper copy of the nested properties 
//const person2 = {...person, hobbies: [...person.hobbies]}

const person = {name : 'Wallie', hobbies:['eat', 'cook']};
const person2 = {...person, hobbies:[...person.hobbies]};
person2.hobbies.push('coding');
console.log(person.hobbies, person2.hobbies);//(2) ['eat', 'cook'] (3) ['eat', 'cook', 'coding']
//now we can use another way called assign 
// because we use the psread operator on the hobbies they have different reference pointers 
const person3 = Object.assign({}, person2);

person3.hobbies.push('working out');
console.log(person3.hobbies);//(4) ['eat', 'cook', 'coding', 'working out']
console.log(person2.hobbies);//(4) ['eat', 'cook', 'coding', 'working out']

// they Object.assign only copies top level properties not nested

// for a deep copy we nned to use JSON.parse(JSON.stringify(ObjectName));

const person4 = JSON.parse(JSON.stringify(person3))// this make a full deep copy 
person4.hobbies.push('walking');
console.log(person4.hobbies);//(5) ['eat', 'cook', 'coding', 'working out', 'walking']
console.log(person3.hobbies);//(4) ['eat', 'cook', 'coding', 'working out']