const items = [
    {name: 'Bike', price: 100},
    {name: 'TV', price: 250},
    {name: 'Scooter', price: 90},
    {name: 'Chair', price: 125},
    {name: 'Radio', price: 299},
    {name: 'HeadPhones', price: 500},
    {name: 'Ninja Turtle', price: 15}
] 


// using filter Method

const less100 = items.filter(item=>item.price<=100)

console.log(less100);
// [{name: 'Bike', price: 100}, {name: 'Scooter', price: 90}, {name: 'Ninja Turtle', price: 15}]

const namelength = items.filter(item=>item.name.length<4)

console.log(namelength);//[{name: 'TV', price: 250}]



console.log(items);//this will log the existing array 


// using map

let n = 0
console.log(n);//before function 0
const ItemsNames = items.map(item=>`${++n}: ${item.name}`)
console.log(n);//after function 7
console.log(ItemsNames);
// ['1: Bike', '2: TV', '3: Scooter', '4: Chair', '5: Radio', '6: HeadPhones', '7: Ninja Turtle']

const itemswithTax = items.map(item=>`${item.name} : ${item.price+(item.price*0.08)}`)
console.log(itemswithTax);// ['Bike : 108', 'TV : 270', 'Scooter : 97.2', 'Chair : 135', 'Radio : 322.92', 'HeadPhones : 540', 'Ninja Turtle : 16.2']

// find method
// returns the very first item with the name Chair that returns true 
const findCheapest = items.find(item=>item.name === 'Chair')
console.log(findCheapest);

// for each 
const list = items.forEach(item=>console.log(item.name))

// some
// some checks to see if at least one items was met with the conditional
// and will return true or false 
const hasInexpensiveItems = items.some(item=>item.price<20)
console.log(hasInexpensiveItems + ": hasInexpensiveItems ");//true


// every
// every is like some but checks all items in the array to see if the
// conditional was met
const noneAreFree = items.every(item=>item.price>0)
console.log(noneAreFree, ": noneAreFree");//false

// reduce method
let totalprice = 0;
items.forEach(item=>totalprice+=item.price)
console.log(totalprice, 'with out reduce');

//with reduce
//the way reduce works is that the first param curV is teh curet total , where you want
//to add toolbar, in this case it is 0 we can change the base or starter to anything 
//which is the 0 in the end basically saying our currentValue is 0 the next param is the 
//item in the array we are iterating over, this will keep looping and keep adding to the 
//curV which will be our overall total  
const totalItemPrice = items.reduce((curV, item) => {
	return item.price + curV
},0)
console.log(totalItemPrice, 'with reduce');


// includes method
// checks to see if something is in the array and returns true or false 
//includes(searchElement, fromIndex)
const simpleArray = [1,2,3,4]
const includesTwo = simpleArray.includes(1)
console.log(includesTwo);


// ternary operator
const ismorethen2 = items[0].name.length > 2 ? 'yes':'no';

console.log(ismorethen2);//yes
