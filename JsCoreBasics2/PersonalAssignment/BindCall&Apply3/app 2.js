const btn = document.querySelector('button')
btn.addEventListener('click',()=>console.log('im working'))

const person2 = {
    name: 'Wallie',
    age: 30,
    // speak:()=>{
    //     console.log(this.name); // this does work with arrow function
    // }
    speak: function () {
        console.log(this.name);
    }
}

person2.speak()//Wallie


// Bind

const person1 = {
    name:'Heg',
    age:34
}

function sayName(a){
    console.log(this.name, a);
}

// bind
// const bindedSayName = sayName.bind(person1, 'is nice ')
// bindedSayName()

// call
// sayName.call(person1, 'is nice ')

// apply
// sayName.apply(person1, ['is nice '])