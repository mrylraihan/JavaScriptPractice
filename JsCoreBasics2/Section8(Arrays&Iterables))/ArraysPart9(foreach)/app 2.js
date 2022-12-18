//foreach

const prices = [10.99, 5.99, 3.99, 6.59];
const tax = 0.19;
const taxAdjustedPrices = [];
prices.forEach(element => {
    console.log(element += element * tax);
    taxAdjustedPrices.push(element);
});

console.log(taxAdjustedPrices);//(4) [13.0781, 7.1281, 4.7481, 7.8421]


const morePrices = [10,5,3,6];
const taxArrayPrice = [];
for (let num of morePrices) {
    num += num * tax;
    console.log(num);
    taxArrayPrice.push(num);
}
console.log(taxArrayPrice);//(4) [11.9, 5.95, 3.5700000000000003, 7.140000000000001]

const anotherTaxArrayPrice = [];

morePrices.forEach((price, idx)=>{
    const priceObj = { index: idx, taxAdjPrice: price * (1 + tax) }
    anotherTaxArrayPrice.push(priceObj);
});

console.log(anotherTaxArrayPrice);// this will add the index and and create the object
//(4) [{…}, {…}, {…}, {…}]



const listOfNum = [1,2,3,4,5];
const newListOfNum = [];

listOfNum.forEach((ele, idx)=>{
    const objList = {index: idx, num:ele}
    newListOfNum.push(objList)
});

console.log(newListOfNum);//(5) [{…}, {…}, {…}, {…}, {…}]