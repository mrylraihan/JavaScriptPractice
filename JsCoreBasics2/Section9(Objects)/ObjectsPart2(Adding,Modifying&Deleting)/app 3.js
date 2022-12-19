//how to add, modify , or delete an object
const complexPerson = {
	name: 'Max',
	hobbies: ['Sports', 'Cooking'],
	address: {
		street: 'Some Street 5',
		stateId: 5,
		country: 'Germany',
		phone: {
			number: 123456789,
			isMobile: true,
		},
	},
	greet: function () {
		console.log('Hey there!')
	},
}
console.log(complexPerson.address.phone.isMobile)
complexPerson.greet()

const anotherPerson = {}
//how we add to an object 
anotherPerson.name = 'Wallie';
//now this is added
console.log(anotherPerson);//{name:'Wallie'}

anotherPerson.greet = function() {
    console.log('hey there!' + this.name);
}//now this function is added to the object

anotherPerson.greet()//
console.log(anotherPerson);//{name: 'Wallie', greet: ƒ}

//we can also override properties
anotherPerson.name = 'Wayel';
console.log(anotherPerson);//{name: 'Wayel', greet: ƒ}

anotherPerson.age = 29;
console.log(anotherPerson);

//how delete properties
delete anotherPerson.name;// this will delete the properties from you 
console.log(anotherPerson);//{age: 29, greet: ƒ}

delete(anotherPerson.age)
console.log(anotherPerson);//{greet: f}
