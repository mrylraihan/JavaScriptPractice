//Inheritance Practice

class User {
	constructor(n, em) {
		this.email = em
		this.name = n
        this.score = 0;
	}
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

}


const user1 = new User('YL', 'yl@gmail.com')
console.log(user1) //User {email: 'yl@gmail.com', name: 'YL'}
user1.updateScore()//app.js:19 yl@gmail.com score is now 1
const whatsThis = user1.updateScore()//app.js:19 yl@gmail.com score is now 1
console.log(whatsThis);//User {email: 'yl@gmail.com', name: 'YL', score: 2}
const user2 = new User('Mike', 'm@gmail.com')

//when ever we create a new admin we are going to have all the 
//properties and methods of a user 
//plus what ever you add for the admin specific properties
class Admin extends User{
    userList = [];//empty array
    addUser(...a){
        a.forEach(ele=>{
            this.userList.push(ele)
        })
    }
    deleteUser(a){
        this.userList = this.userList.filter(ele=>{
            return ele.email != a.email
        })
    }
}




const admin1 = new Admin('nl', 'nl@gmail.com');
console.log(admin1);//Admin {email: 'nl@gmail.com', name: 'nl', score: 0, userList: Array(0)}
admin1.addUser(user1,user2)
// admin1.addUser(user1,user2)
console.log(admin1.userList);//(2) [User, User]
admin1.deleteUser(user1)
console.log(admin1.userList);//(1) [User]
