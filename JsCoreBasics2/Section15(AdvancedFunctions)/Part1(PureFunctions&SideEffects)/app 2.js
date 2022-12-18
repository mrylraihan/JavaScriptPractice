//Pure Functions
//A pure function is a function where the return value is only determined by 
//its input values, without observable side effect, you will get the same 
//result every time 

function sum(a, b) {
    return a+b
}
//same outcome every time
const result1 = sum(4,2);
const result2 = sum(4,2);
console.log(result1);//6
console.log(result2);//6

//impure function is the opposite of a pure function where you can determine 
//the outcome based on the arguments, with impure you cant, you will get a 
//different result every time 


function randomNum(a,b) {
    return a+b+Math.random()
}
//different outcome every time
const random1 = randomNum(2,2)
const random2 = randomNum(2,2)
console.log(random1);// 4.335047655189014
console.log(random2);// 4.696416625201872


//Side effects, a function is also consider not a pure if it produces side
//effects, Side effects which is a fancy way of saying changes something 
//outside the function 

//for example changing a variable outside the function 

let fName = '';//variable going to be affected by function 
function addName(a, b) {
   fName = a +' '+ b;//reassigns fName to a+' '+b, this is the side effect
    // return fName;//returns the variable
}
addName('wallie' , 'raihan');
console.log(fName);//wallie raihan

//another example of side effect would be if we pass in a array or object and 
//it changes when it returns, the reason why is because they are reference 
//values so when we introduce a change we change the original object

const hobbies = ['coding', 'working out']

function printHobbies(h) {
    h.push('New Hobby');
    console.log(h);
}
//this changes the original array, producing a side effect 
printHobbies(hobbies);//['coding', 'working out', 'New Hobby']
console.log(hobbies);//['coding', 'working out', 'New Hobby']