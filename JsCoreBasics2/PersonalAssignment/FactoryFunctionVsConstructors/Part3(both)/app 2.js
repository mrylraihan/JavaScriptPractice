//factory function
function personFactory(n) {
    return {
        name:n,
        talk:function () {
            return `I am ${this.name}`
        }
    }
}

const me = personFactory('Mike')
console.log(me.talk());// I am Mike
const you = personFactory('You')
console.log(you.talk());// I am You
//if you change the talk function it will only affect the object that changed it
//it wont affect the other object
you.talk = function () {
    return `Hello, I am ${this.name}`
}
//only changed in the you object 
console.log(you.talk());//Hello, I am You
console.log(me.talk());// I am Mike

//constructor function
function Person(n) {
    this.name = n,
    this.talk = ()=>`I am ${this.name}`//in constructors u can use this and arrow

}
//this is called object instantiation 
const meWithConst = new Person('Wallie')
console.log(meWithConst.talk());//I am Wallie
const youWithConst = new Person('You')
console.log(youWithConst.talk());//I am You

youWithConst.talk = function () {
        return `Hello, I am ${this.name}`
}

console.log(youWithConst.talk());//Hello, I am You

console.log(meWithConst.talk());//I am Wallie



// they are both for object creation logic once