//creating objects with classes
class User {
	constructor(n, em) {
		this.email = em
		this.name = n
	}
	// logIn = function() {//when turned into an expression it reflects on the instances of the class
	// 	console.log(`${this.email} is logged in`)
	// }
    logIn(){
		console.log(`${this.email} is logged in`)        
    }
	logOut() {
		console.log(`${this.email} is logged out`)
	}
}

const user1 = new User('YL', 'yl@gmail.com')
console.log(user1) //User {email: 'yl@gmail.com', name: 'YL'}

user1.logIn() //yl@gmail.com is logged in
user1.logOut() //yl@gmail.com is logged out

//creating objects with constructors

function User1(n, e) {
	this.name = n
	this.email = e

	// can can create these in our prototype to remove redundancy in our object creation
	//but for this example we will leave it
	this.logIn = function () {
		console.log(`${this.email} is logged in`)
	}
	this.logOut = function () {
		console.log(`${this.email} is logged out`)
	}
}

const user2 = new User1('w', 'W@gmail.com')
console.log(user2) //User1 {name: 'w', email: 'W@gmail.com', logIn: ƒ, logOut: ƒ}
user2.logIn() //W@gmail.com is logged in

//creating object literals

const user3 = { 
    name: 'mike', 
    email: 'mike@gmail.com',
    logIn: function () {
        console.log(`${this.email} is logged in`);
    }, 
    //or another way to write a function 
    logOut(){
        console.log(`${this.email} is logged out`)
    }
}

console.log(user3);//{name: 'mike', email: 'mike@gmail.com', logIn: ƒ, logOut: ƒ}
user3.logIn();//mike@gmail.com is logged in
