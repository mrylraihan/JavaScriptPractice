const sayHi =(obj)=>{
    console.log(`hey im ${obj.name}`);
}

const person = {name:'Wallie', age:30}

module.exports = {
    sayHi,
    person
}