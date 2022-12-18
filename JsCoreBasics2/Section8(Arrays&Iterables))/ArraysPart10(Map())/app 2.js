//Transforming Data with map()

const prices = [10,5,3,6];
const tax = 0.19;
const taxAdjPriceList = [];
// prices.forEach((price, idx, prices)=>{
//     const priceObj = {index:idx, taxAdjPrice : price *(1+tax)};
//     taxAdjPriceList.push(priceObj);
// });

const taxNumlist = prices.map((price, idx, prices)=>{
    const priceObj = {index:idx, taxAdjPrice : price * (1 + tax)};
    return priceObj;
});
console.log(prices);
console.log(taxNumlist);

//Using Map to convert numbers to strings 

const numberList  = ['1','2','3'];// number array in string format

console.log(numberList);//(3) ['1', '2', '3']

const realNumberList = numberList.map(Number);//converts to real numbers

console.log(realNumberList);//(3) [1, 2, 3]

const stringNumber = realNumberList.map(String);//converts it back to a string
console.log(stringNumber);//(3) ['1', '2', '3']