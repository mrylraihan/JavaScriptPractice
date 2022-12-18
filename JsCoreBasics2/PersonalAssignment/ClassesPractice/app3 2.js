//Defining and using classes
//classes allow us to build objects easy with a blue print
//class define blue prints for objects
//if you create an object from a class ten that object is an instance of that class

class Hero {
	name // because we are in a class these would be consider fields
	alias // fields in the class properties in the object
	superPower// you dont need theres fields defined

	constructor(n, a, sp) {
		this.name = n // this would be the class property
		this.alias = a
		this.superPower = sp
	}
    //these are still called methods
	printInf = function () {// with this syntax when logging you object will appear
		console.log(this.name, this.alias, this.superPower)
	}
	//or
	printDetails(){ // this syntax it wont show in your object when logging 
		console.log(this.name, this.alias, this.superPower)
	}
}

Hero.prototype.unmask = function () {
	return ` the Super Hero ${this.name} is actually ${this.alias}, and there super power is ${this.superPower}`
}

const hero1 = new Hero('Batman', 'Bruce Wayne', "Super Smart & Super rich");
console.log(hero1);//Hero {name: 'Batman', alias: 'Bruce Wayne', superPower: 'Super Smart & ///Super rich', printInf: ƒ} it only shows the printInf because we used an function
//expression to define it in the class 

console.log(hero1.unmask())
hero1.printInf();//Batman Bruce Wayne Super Smart & Super rich
hero1.printDetails()//Batman Bruce Wayne Super Smart & Super rich
