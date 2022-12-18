
// The Object.assign() method copies all enumerable own properties from one or more source objects to a target object.It returns the modified target object.

const person = {
    name:'Wallie'
}
console.log(person); //{ name: 'Wallie' }
Object.assign(person, { name: 'Wayel' });//{name: 'Wayel'}

console.log(person);

person2 = Object.assign(person, { name: 'Mike' })
//here we see object assign changing the targeted object person and copying it to person2
console.log(person);//{ name: 'Mike' }
console.log(person2);//{name: 'Mike'}

//now lets see if we change peron back to its original if it will reflect on person2

Object.assign(person, {name:'Wallie'})

console.log(person);//{name: 'Wallie'}
console.log(person2);//{name:'Wallie}
//now we see if they will point to the same reference regardless if the object gets modified its still pointing to the same reference

person2.name = 'Susan'
console.log(person);//{name: 'Susan'}
console.log(person2);//{name:'Susan'}
//this is still pointing to the same reference object


//now a better way to do this is 
const person3 = Object.assign({}, person,{name:'nike'})// by adding the empty object as the first parameter it will basically copy the previous object and override the previous values
console.log(person);//{name: 'Susan'}
console.log(person3);//{name: 'nike'}
// this is now not modifying the exisiting object person
// lets try again 

const cat = {name:'fluffy'}
const cat2 = Object.assign({}, cat, {name:'fuzzy'})
console.log(cat); //{ name: 'fluffy' }
console.log(cat2);//{name: 'fuzzy'}

//now the other way do it is with the spread operator 

const cat3 = {...cat2, name:'Mittens'} 
console.log(cat2);// { name: 'fuzzy' }
console.log(cat3);//{name: 'Mittens'}



//now lets say you don't want the same reference pointer 


// now the next method is Object.defineProperty
// now there 2 way to create an object with either an object literal 
// const objName = {}
// // or with a constructor
// const objName = new ClassName()

// now you can do it with this method
// const table ={color:'brown'} 
const table ={}
Object.defineProperty(table, "color", {value:"brown"})
console.log(table);//{color: 'brown'}
// you can also make different preperties writable or not ,meaning they can or cant change the value
const car = {}
Object.defineProperty(car,"type",{value:'Tesla',writable:false} )//
//now the type property has the writable value ot false, meaning we cant change it 
console.log(car);//{type: 'Tesla'}
car.type = 'BMW'//trying to change  the value but it wont work 
console.log(car);//{type: 'Tesla'}


//object.entries()
//object.entries() takes an object and converts it to a array, depending on how many values it will become a multi dimensional array  
const house = {firstFloor:'living room', secondFloor:'bed room'}

console.log(house);//{firstFloor: 'living room', secondFloor: 'bed room'}
const entriesHouse = Object.entries(house)
console.log(entriesHouse);//[['firstFloor', 'living room'],['secondFloor', 'bed room']]


//object.fromEntries is doing the reverse taking a multi-array and turning it to a object 
//each array gets converted to a property in the object 
//the first index will be the key and teh second the value of each array 
// const arrPhone = [['brand', 'Apple']]//will become {brand:"Apple"}
const arrPhone = [['brand', 'Apple']]//double nested arr
const phone = Object.fromEntries(arrPhone)
console.log(phone);//{brand: 'Apple'}
const arrPhone2 = [['brand', 'Apple'],['model', 'iphone 13 pro']]//double nested arr
const phone2 = Object.fromEntries(arrPhone2)
console.log(phone);//{brand: 'Apple', model:'iphone 13 pro'}

// Object.freeze is a method that freezes an object so you CanvasPattern, update, add, or delete properties from 

const human = {name:'Wallie', age:30}
Object.freeze(human)
console.log(human);// {name:'Wallie', age:30}
human.name = 'Wayel'//try to update 
console.log(human);// {name:'Wallie', age:30}//doesnt change
delete human.age //try to delete 
console.log(human);// {name:'Wallie', age:30}//doesnt change
human.occupation = 'developer' //try to delete 
console.log(human);// {name:'Wallie', age:30}//doesnt change


const human2 = { name: 'Wallie', age: 30 }
console.log(human2);// {name:'Wallie', age:30}
human2.name = 'Wayel'//try to update 
console.log(human2);// {name: 'Wayel', age: 30}//changes
delete human2.age //try to delete 
console.log(human2);// {name: 'Wayel'}//removed property
human2.occupation = 'developer' //try to delete 
console.log(human2);// {name:'Wayel', occupation:'developer' }//
