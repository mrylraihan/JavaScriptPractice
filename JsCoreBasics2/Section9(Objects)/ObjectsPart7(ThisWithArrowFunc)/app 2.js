const dog = {
	name:'spark',
    thisPracticeWitharrow: () => {
		console.log(this)
	},

	thisPractice: function() {
		console.log(this)
	},
}

dog.thisPractice(); //points to the dog object
dog.thisPracticeWitharrow(); //points to the window object because arrows dont know this

const sayName = ()=> {
      console.log(this.name);  
    }
const sayNameNoArrow = function () {
    console.log(this.name);
}
const bark = a=> {
    console.log(a.name);
}
sayName.call(dog);//even with call, apply, or bind the arrow function ignores this 
sayNameNoArrow.call(dog)//spark
bark(dog)//spark


//Another example
const members = {
teamName: 'Blue Ravens', 
people: ['Max', 'Manuel'], 
getTeamMembers(){
    // this.people.forEach(function (p) {
    //     console.log(p + ' - ' + this.teamName); //this wont work because the function declaration 
    // })//is bound to the window in this example
    //arrow function in this case will work fine it binds to the objects
    this.people.forEach(p=> console.log(p +' - '+ this.teamName));
}
};

members.getTeamMembers();