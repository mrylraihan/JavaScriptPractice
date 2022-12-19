//objects are suppose to reflect real life entities 
//objects are made up of properties which are key value pairs (name:'Wallie')(key: value)
//and Methods which are functions that are in objects 
//method-Key: function () {}
//allows you to group data together
//Object literal = {}

const person = {
    name:'wallie', 
    age:29
}
console.log(person);
const person2 = {
    1:1,//properties
    2:2,
    3:3,
    'hi':'HI'
}
console.log(person2);
const complexPerson = {
    name: 'Max', 
    hobbies:['Sports', 'Cooking'],
    address:{
        street: 'Some Street 5',
        stateId: 5, 
        country: 'Germany',
        phone: {
            number:123456789,
            isMobile: true
        }
    },
    greet:function () {
        console.log('Hey there!');
    }

}
console.log(complexPerson.address.phone.isMobile);
complexPerson.greet();