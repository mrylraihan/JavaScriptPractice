const num1 = 1
const num2 = 2

const add = function (num1, num2) {
	num1 = num1 + num2
	return num1
}

const sum = add(num1, num2)
console.log(sum);3

const person1 = {
  firstName: 'Ben',
  lastName: 'Adamski',
  fullName: function () {
    return this.firstName + ' ' + this.lastName
  }
}

const person2 = {
  firstName: 'Santa',
  lastName: 'Clause'
}

// Question 3:  Invoke the `fullName()` method so it returns `person2`'s fullname
const answer3 = person1.fullName.call(person2) // replace null with your response

console.log(answer3);//Santa Clause



const alderaan = { name: 'Alderaan' }
const deathStar = {
	fire: function () {
		return this.name
	},
}

console.log(deathStar.fire.call(alderaan))// Alderaan