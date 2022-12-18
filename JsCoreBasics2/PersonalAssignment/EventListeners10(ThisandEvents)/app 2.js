const btn = document.querySelector('button')
const btn2 = document.getElementById('btn2')
const btn3 = document.getElementById('person')
// btn.addEventListener('click', ()=>console.log(this))
// this point to the window object

//with arrow functions the this keyword always points to the window
const printObjectWithEvent = function(e){
    console.log(e);
    console.log(this);// points to the window object, but on the addEventListener
    //it will point to the object invoking it
}
btn.addEventListener('click', printObjectWithEvent)//

// passing a default param 
const printObject = ()=>{
    console.log(btn2);
}
//how bind works with arrow function
btn2.addEventListener('click', printObject.bind(this, btn2))//first param is the window
//second param is the btn getting passed through


//how bind works 
const person = {name:'wallie'}

const sayName = function() {
    console.log(this);
}
 
btn3.addEventListener('click', sayName.bind(person))



// const person = { name: 'wallie' }
// // because its a arrow function it wont bind to the object but the window
// const sayName = () => {
// 	console.log(this)
// }

// const personSayingName = sayName.bind(person)

// btn3.addEventListener('click', personSayingName)