//Higher Order Array Methods

const companies = [
    {name:'Company One', category:'Finance', start:1981, end:2003},
    {name:'Company Two', category:'Tech', start:1991, end:2013},
    {name:'Company Three', category:'NonProfit', start:1971, end:2003},
    {name:'Company Four', category:'Retail', start:1999, end:2000},
    {name:'Company Five', category:'Auto', start:2000, end:2021},
    {name:'Company Six', category:'Medical', start:2010, end:2020},
    {name:'Company Seven', category:'Retail', start:2011, end:2015}
]


//forLoop
for (let i = 0; i < companies.length; i++) {
    const element = companies[i];
    console.log(element);// this will log every object 
}

//forEach

companies.forEach(ele => {
    console.log(ele);// this will also log every object 
});

//forof

for (const iterator of companies) {
    console.log(iterator);// this will also log every object 
}

//forIn
for (const key in companies) {
    console.log(companies[key]);// this will also log every object
}

//How to filter with a forloop
const ages = [33,12,44,55,14,7,24,41,54,29,21];

let canDrink = [];
for (let i = 0; i < ages.length; i++) {
    if (ages[i]>=21) {
        canDrink.push(ages[i]);
    } 
}

console.log(canDrink);

//filter with filter
// const canDrinkWithF = ages.filter(function(age) {
//     if (age>=21) {
//         return true;
//     }
// });
//with arrow function
const canDrinkWithF = ages.filter(a => a >= 21);
console.log(canDrinkWithF);

//filter retail companies 

const retailCompanies = companies.filter((a) => a.category === "Retail");
console.log(retailCompanies);

//filter all the companies that started in the 80s

const companies80 = companies.filter(a => a.start >1979 && a.start < 1990);
console.log(companies80);

//filter all companies that lasted 10 years 

const tenYearPlusCompanies = companies.filter( a => (a.end - a.start)>=10);

console.log(tenYearPlusCompanies);