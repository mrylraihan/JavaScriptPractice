function sayName() {
    console.log(this.name);
}

const person1 = {name:'Garrett'}
const person2 = {name:'Heshow'}


// sayName()//logs nothing this points to the window
//(param 1 = object )
const personSayName = sayName.bind(person2)

personSayName();

function tellMeDetails(age, favoriteFood) {
    console.log(`hey im ${this.name} and im ${age} years old, and i like to eat ${favoriteFood}`);
}

const sayDetails = tellMeDetails.bind(person1, 24, 'Pizza bagels')
sayDetails()


function something(a) {
    console.log(a);
}


const btn = document.querySelector('button')

btn.addEventListener('click', something.bind(this, 'clicked'))