//Call

//let greet = function(a,b){
//  return ` ${a} and {b} and this.name`
//}
//
//greet.call(Param1, Param2, Param3)
//Param1 is the object which this keyword will point to
//Param2 will be the first parameter in this case a
//Param3 will be the second parameter in this case b

const person = {
    name:'wallie'
};

let greet = function(a,b){
 return ` ${a} and ${b} ${this.name}`
} 
         
console.log(greet.call(person, 'hey', 'yes'))// hey and yes wallie
//if you dont have a object to pass in then you can use this or null to ignore that 
console.log(greet.call(this, 'hey', 'yes'))// hey and yes 
console.log(greet.call(null, 'hey', 'yes'))// hey and yes 