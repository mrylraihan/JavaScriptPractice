//Weak Sets and Weak map
let person = {name:'wallie'};
const persons = new WeakSet();
persons.add(person)


console.log(persons);//WeakSet {{…}}

const personData = new WeakMap();

personData.set(person,'extra stuff');

person = null

console.log(personData);