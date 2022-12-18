//When to use arrows and when not to use them 

//Anonymous Functions, they have no name
// function () {
//     return 'Hello'
// }
//they are functions with no name that you assign to a variable 
const storedFunction = function () {
    return 'Hello'
}

// converted to Arrow

const storedArrowFunction = ()=> console.log('hello from arrow');
storedArrowFunction();//hello from arrow



// ------------------------------------------------->
//CallBack Functions
//are functions you pass in as a parameter
function exampleCallBack(a) {
    a();
}
//we pass in an anonymous function into the exampleFunction
exampleCallBack(function() {
    console.log('hello');
})//hello

function cdPassedIn() {
    console.log('Passing in function');
}

exampleCallBack(cdPassedIn)//Passing in function

//Convert to an arrow function
//arrow function that takes a function as a parameter
const arrowExampleCB = a => a();

arrowExampleCB(()=>console.log('Anonymous arrow passed in arrowExampleCB'))
//Anonymous arrow passed in arrowExampleCB

exampleCallBack(()=>console.log('Anonymous arrow passed in exampleCallBack'))
//Anonymous arrow passed in exampleCallBack

arrowExampleCB(cdPassedIn)//Passing in function


// ------------------------------------------------->
//Named Functions
// they have there own name in front of the function 
//Example 1 Factory Function
function personFactory() {
    return {}
}
//Example 2 Constructor Function 
function Person(n) {
    this.name = n
}
//Example 3 Regular Function
function name() {
    return 'named function'
}

// you can not convert a Named function to a arrow function
// the closet way to do this is an anonymous function and storing it 
//in a variable 
const nameArrow = ()=>{};






// ------------------------------------------------->
//Object Methods
//methods inside objects 
const obj = {
    name:'obj',
    sayHello:function(){return'hello from '+ this.name}//this points to the name
}
console.log(obj.sayHello())// hello from obj

const obj2 = {
    name:'obj2',
    sayHelloArrow:()=>`hello, arrowFunction in ${this.name}`,//this points to the window
    sayHelloArrow2:()=>'hello, arrowFunction2 from obj2'
}

console.log(obj2.sayHelloArrow())// returns the whole function
console.log(obj2.sayHelloArrow2())//hello, arrowFunction2 from obj2

//example2 
const obj3 = {
    name: 'obj3',
    talk:function() {
        return this//points to object stays in scope
    },
    talkArrows:()=>this//point to window gets out of scope
}

console.log(obj3.talk())//{name: 'obj3', talk: ƒ, talkArrows: ƒ}
console.log(obj3.talkArrows())//Window
//even when you bind call or apply the object to it it will still point to the window, this is because its bound to the surround scope that the function is in, the keyword function creates a bind between the object calling it and the this keyword thats why constructors functions cant be an arrow function
console.log(obj3.talkArrows.call(obj3));//window

// example4

const nestedObj = {
	name: 'nested obj',
	obj4: {
		name: 'obj4',
		talk: function () {
			return this //still point to the object calling it
		},
		talkArrows: () => this, //window,
		talkCB: function () {
			testingCB(() => console.log('talkCB', this)) //points to the object
		},
		talkCBRegular: function () {
			testingCB(function(){console.log('talkCBRegular', this)}) //points to the object
		},
	},
}
console.log(nestedObj.obj4.talk());//{name: 'obj4', talk: ƒ, talkArrows: ƒ}
console.log(nestedObj.obj4.talkArrows.call(nestedObj));//window
nestedObj.obj4.talkCB();//talkCB {name: 'obj4', talk: ƒ, talkArrows: ƒ, talkCB: ƒ}
nestedObj.obj4.talkCBRegular()


// ------------------------------------------------->

// Arrows functions are best used in CallBack functions
function testingCB(p) {//function we are invoking in our object
    p();
}

//when they are used in a call back function 

const obj5 = {
    name: 'obj5',
    testCB(){

        console.log(this.name);
        //passing the arrow function as a callback will point to the object
        testingCB(() => console.log('object test', this.name));//points to the object 
         
        testingCB(function(){
            console.log("window test", this.name)//window
        });
    }, 
    testArrow: ()=>console.log('testArrow : ', this.name)//window
}

obj5.testCB()// obj5

obj5.testArrow.call(obj5);//window


// ------------------------------------------------->
// Arrow functions in the prototype 

function Person(n){
    this.name = n;
}

Person.prototype.talk = function(){
    console.log(this);//points to the object 
}
Person.prototype.arrowTalk =()=>{
    console.log(this);// points to window 
}

const metest = new Person('wallie')

metest.talk()//Person {name: 'wallie'}
metest.arrowTalk()//window


// ------------------------------------------------->
//Now with event listeners 

document.body.addEventListener('click', function(){console.log(this);})//document/object
document.body.addEventListener('click', ()=>console.log(this))//window


// ------------------------------------------------->

function outer(callback, obj){
    callback.call(obj)
}
function inner(){
    console.log(this);
}

outer(inner, {name:'Whittey'})// {name: 'Whittey'}
