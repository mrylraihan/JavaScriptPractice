//Constructor functions 
//Constructor functions are functions that create objects for us
//really they create instances of a class,
//but when we are only using a constructor function we are create an 
//instance(object) with out the class its self

//similar to factory functions 

//no constructor
const me = {
    name: 'Wallie',
    talk(){return `Ima ${this.name}`} 
}
const brother = {
    name: 'Heshow',
    talk(){ return `Ima ${this.name}`} 
}

console.log(me);//{name: 'Wallie', talk: ƒ}
console.log(brother);//{name: 'Heshow', talk: ƒ}
console.log(me.talk());//ima Wallie
console.log(brother.talk());// ima Heshow
//all these steps to create 2 objects 

//with a constructor
//constructors are the blueprints for the objects
// a Key give away to tell if your function is a constructor 
// the Name must be Capital, it will work without but it should have

function Person(name) {
    //unlike the factory function we dont need the return
    this.name = name;
    this.talk = ()=>{return `hey im ${this.name}`}

}

const meWithCon = new Person('Wallie')
const brotherWithCon = new Person('Heshow')
console.log(meWithCon);//Person {name: 'Wallie', talk: ƒ}
console.log(brotherWithCon);//Person {name: 'Heshow', talk: ƒ}
console.log(meWithCon.talk());//hey im Wallie
console.log(brotherWithCon.talk());// hey im Heshow


//Another example

document.body.append(document.createElement('hr'))
function SuperElement(type, content) {
    this.el = document.createElement(type);
    this.el.innerText = content;
    document.body.append(this.el);
    this.el.addEventListener('click',()=>console.log(this.el));
}
// creating each one by one
const h1 = new SuperElement('h1', 'Hello ima H1')
const h2 = new SuperElement('h2', 'Hello ima H1')
const h3 = new SuperElement('h3', 'Hello ima H1')


document.body.append(document.createElement('hr'))
//create an array and use map to map them to SuperElement Constructor
const array = [['a'],['b'],['c']]
const myElements = array.map(item=>{
    return new SuperElement('p', item);
})

//or
document.body.append(document.createElement('hr'))

//create an array and use map to map them to SuperElement Constructor
// but also use the spread operator to pass in the params or teh constructor
const array1 = [['h2','im and h2'],['p', 'ima p tag'],['h3', 'ima h3 tag']]
const myElements2 = array1.map(item=>{
    return new SuperElement(...item);
})