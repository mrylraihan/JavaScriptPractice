//how you import other functions and variables from different 
//js files, we can rename them by using as then the name you want to use
// import { double, name } from './ultis.js';
// import { double as utlisDouble, name } from './ultis.js'
//or if you have alot of imports you can use the *
import * as ultisClass from './ultis.js';
import sayN from './default.js';




// console.log(utlisDouble(5));
// console.log(name);
const saySomething = ()=>{
    sayN(ultisClass.name)
}


document.getElementById('btn').addEventListener('click',saySomething);

console.log(ultisClass.double(5));
console.log(ultisClass.name);