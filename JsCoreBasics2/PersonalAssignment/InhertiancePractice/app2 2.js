//Inheritance Practice

class User {
    static num = 20;
    numbers = 20
	constructor(n, em) {
		this.email = em
		this.name = n
        this.score = 0;
	}
	// logIn = function() {//when turned into an expression it reflects on the instances of the class
	// 	console.log(`${this.email} is logged in`)
	// }
	logIn() {
		console.log(`${this.email} is logged in`)
        return this// the object
	}
	logOut() {
		console.log(`${this.email} is logged out`)
        return this//the object
	}
    updateScore(){
        this.score++;
        console.log(this.email, 'score is now', this.score);
        return this// the object
    }
    logNumbers(){
        console.log(this.numbers);
    }
    static logNum(){
        console.log(this.num, 'static method accessing static props', User.numbers);
    }
}


const user1 = new User('YL', 'yl@gmail.com')
console.log(user1) //User {email: 'yl@gmail.com', name: 'YL'}
console.log(user1.num);//undefined because this the instance calling it
console.log(User.num);//20 because its the class calling it
user1.logNumbers()//20
user1.logIn() //yl@gmail.com is logged in
const whatsThis = user1.logOut() //yl@gmail.com is logged out// and whats returned is the object

console.log(whatsThis);// the returned object
//User {email: 'yl@gmail.com', name: 'YL', score: 0}

//when ever we create a new admin we are going to have all the 
//properties and methods of a user 
//plus what ever you add for the admin specific properties
class Admin extends User{
    constructor(n,em, y){
        super(n, em)// this gets passed to the supers constructor
        //which is the Users constructor
        this.yearsExp = y;// this is the class specific property so we dont pass it in 
    }
}


const admin1 = new Admin('nl', 'nl@gmail.com', 8);
console.log(admin1);//Admin {email: 'nl@gmail.com', name: 'nl', score: 0, yearsExp: 8}
console.log(Admin.num);//20 extended class have access to static variables and methods
//now if yor creating a subclass that doesnt have any class specific properties 
//you dont need to create the constructor and add the supers constructor
admin1.logNumbers();//20
Admin.logNum();//20 subclasses 

class Security extends User{
//no construcor or super but if we wanted to add class specific method we can 
}

const security1 = new Security('sl', 'sl@gmail.com')
console.log(security1);//Security {email: 'sl@gmail.com', name: 'sl', score: 0}