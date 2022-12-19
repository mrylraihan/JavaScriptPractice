//working with reduce
const companies = [
	{ name: 'Company One', category: 'Finance', start: 1981, end: 2003 },
	{ name: 'Company Two', category: 'Tech', start: 1991, end: 2013 },
	{ name: 'Company Three', category: 'NonProfit', start: 1971, end: 2003 },
	{ name: 'Company Four', category: 'Retail', start: 1999, end: 2000 },
	{ name: 'Company Five', category: 'Auto', start: 2000, end: 2021 },
	{ name: 'Company Six', category: 'Medical', start: 2010, end: 2020 },
	{ name: 'Company Seven', category: 'Retail', start: 2011, end: 2015 },
]

const ages = [33, 12, 44, 55, 14, 7, 24, 41, 54, 29, 21]

//adding the elements all together with a forloop
let sum = 0
for (let i = 0; i < ages.length; i++) {
	sum += ages[i]
}
console.log(sum) //334

//or with a foreach
let sum2 = 0
ages.forEach((element) => {
	sum2 += element
})

console.log(sum2) //334

//with the arrays.reduce method

//const sumUp = ages.reduce((a,b)=> a+b, 0)
const sumUp = ages.reduce((a, b) => a + b)
console.log('no 0 added at the end: ' + sumUp) //334

//again

const ageSum = ages.reduce(function (total, age) {
	return total + age
}, 0) // the 0 represents the initially value of total before it starts to add the elements
//meaning total = 0 then we add the ages elements

console.log(ageSum) //334
//array.reduce((preV,curValue,curIndex,originalA)=>{
//return preV +curValue;
//},preV)

//lets get the total years of each company
const totalyears = companies.reduce(function (total, company) {
	return total + (company.end - company.start)
}, 0)

console.log(totalyears) //112

//now with arrow functions

const totalYears2 = companies.reduce((t, c) => t + (c.end - c.start), 0)
console.log(totalYears2) //112

//with arrow functions but with out the last paramter of the prevValue
const totalYears3 = companies.reduce((t, c) => t + (c.end - c.start))
console.log(totalYears3) //[object Object]2232121104 we get this error because we are dealing with objects so
//we must add the prevValue of 0

const totalYears4 = companies.reduce((t, c) => t + (c.end - c.start), 0)
console.log(totalYears4) //112

//lets combine the methods

let combinedMethods = ages.map((a) => a * 2).filter((a) => a > 30).sort((a,b)=>a-b);
console.log(combinedMethods);//(8) [42, 48, 58, 66, 82, 88, 108, 110]
combinedMethods = combinedMethods.map((a,i)=> `${++i}:${a}`);
console.log(combinedMethods);;(8)[('1:42', '2:48', '3:58', '4:66', '5:82', '6:88', '7:108', '8:110')]
const [a,b,...c] = [...combinedMethods];
console.log(a);//1:42
console.log(c);//(6) ['3:58', '4:66', '5:82', '6:88', '7:108', '8:110']
const reduceC = c.reduce((t,a)=>t+a,0);
console.log(reduceC);//03:584:665:826:887:1088:110 this happens because they are strings 

//
const letter = ['w', 'a', 'y', 'e', 'l']
const word= letter.reduce((t,a)=>t+a)
console.log(word);//wayel
//or 
const word2 = letter.join('');
console.log(word2);