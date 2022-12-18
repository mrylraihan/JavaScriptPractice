function sayName() {
    console.log(this.name);
}

const person1 = {name:'Garrett'}
const person2 = {name:'Heshow'}


// sayName()//logs nothing this points to the window
//(param 1 = object )
sayName.call(person2)



function tellMeDetails(age, favoriteFood) {
    console.log(`hey im ${this.name} and im ${age} years old, and i like to eat ${favoriteFood}`);
}

tellMeDetails.call(person1, 24, 'Pizza bagels')

function tellMeDetails2(age, favoriteFood) {
	return(
		`hey im ${this.name} and im ${age} years old, and i like to eat ${favoriteFood}`
	)
}
const tellDetailsResult = tellMeDetails2.call(person2, 30, 'arabic food')
console.log(tellDetailsResult);

const btn = document.querySelector('button')

function something(a) {
    console.log(a);
}

btn.addEventListener('click',()=> something.call(this, 'clicked'))

function something2(a) {
    return a
}

function printThis() {
    console.log(something2.call(this,'apple'));
}
btn.addEventListener('click', printThis)


// hey there 