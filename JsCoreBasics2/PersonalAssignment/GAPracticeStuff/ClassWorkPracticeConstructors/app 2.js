function Hero(name, alias){
this.name = name;
this.alias = alias;
}

Hero.prototype.unmask = function () {
	return `${this.name} is ${this.alias}`
}

const batMan = new Hero('Batman', 'Bruce');
console.log(batMan.unmask());

function Person(name, age) {
	this.name = name;
	this.age = age;
	this.sayHI = function (){
		console.log(this.name + ' says hi');
	}
}

const person1 = new Person('Wallie', 29)
person1.sayHI()