//Apply
//let greet = function(a,b){
//  return ` ${a} and {b} and this.name`
//}
//
//greet.apply(Param1, Param2, Param3)
//Param1 is the object which this keyword will point to
//Param2 will be the first parameter in this case a
//Param3 will be the second parameter in this case b

const person = {
	name: 'wallie',
}

let greet = function (a, b) {
	return ` ${a} and ${b} ${this.name}`
}

console.log(greet.call(person, 'hey', 'yes')) // hey and yes wallie
//if you dont have a object to pass in then you can use this or null to ignore that
console.log(greet.call(this, 'hey', 'yes')) // hey and yes
console.log(greet.call(null, 'hey', 'yes')) // hey and yes



//------------------------------>

function Sum(a,b){
	return a+b
}

const sumWithNull = Sum.apply(null,[2,2]);
const sumWithThis = Sum.apply(this,[2,3]);
console.log(sumWithNull);
console.log(sumWithThis);

//===================>

function sumArugments (){
	let sum = 0;
	for (let i = 0; i < arguments.length; i++) {
		sum += arguments[i]
	}
	return sum;
}

const sumArgs = sumArugments.apply(null,[2,4])
const sumArgs2 = sumArugments.apply(this, [2, 4])
console.log(sumArgs);
console.log(sumArgs2);
