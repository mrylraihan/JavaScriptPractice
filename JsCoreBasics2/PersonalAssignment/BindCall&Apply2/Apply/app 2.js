function sayName() {
    console.log(this.name);
}

const person1 = {name:'Garrett'}
const person2 = {name:'Heshow'}


// sayName()//logs nothing this points to the window
//(param 1 = object )
sayName.apply(person2)



function tellMeDetails(age, favoriteFood) {
    console.log(`hey im ${this.name} and im ${age} years old, and i like to eat ${favoriteFood}`);
}

tellMeDetails.apply(person1, [24, 'Pizza bagels'])

function tellMeDetails2(age, favoriteFood) {
	return(
		`hey im ${this.name} and im ${age} years old, and i like to eat ${favoriteFood}`
	)
}
const tellDetailsResult = tellMeDetails2.apply(person2, [30, 'arabic food'])
console.log(tellDetailsResult);

const btn = document.querySelector('button')

function something(a) {
    console.log(a);
}

btn.addEventListener('click',()=> something.apply(this, ['clicked']))

function something2(a) {
    return a
}

function printThis() {
    console.log(something2.apply(this,['apple']));
}
btn.addEventListener('click', printThis)


