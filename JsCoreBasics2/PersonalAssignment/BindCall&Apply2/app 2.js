const person = {name:'wallie'}
const person2 = {name:'Wallie'}
const person3 = {name:'wayel'}

const pdetails = [30, 'Software Developer']

function personDetails(age, job) {
    return ` hey im ${this.name}, and im ${age} years old, i work as a ${job}`
}

//bind with spread operator(allows you to separate the array one by one )
const personDeets = personDetails.bind(person, ...pdetails)
console.log(personDeets());//hey im wallie, and im 30 years old, i work as a Software Developer

//call with spread operator(allows you to separate the array one by one )
console.log(personDetails.call(person2, ...pdetails));//hey im Wallie, and im 30 years old, i work as a Software Developer

//apply
console.log(personDetails.apply(person3, pdetails));// hey im wayel, and im 30 years old, i work as a Software Developer

