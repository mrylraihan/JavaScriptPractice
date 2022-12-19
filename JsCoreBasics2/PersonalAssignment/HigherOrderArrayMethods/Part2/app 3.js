const companies = [
    { name: 'Company One', category: 'Finance', start: 1981, end: 2003 },
    { name: 'Company Two', category: 'Tech', start: 1991, end: 2013 },
    { name: 'Company Three', category: 'NonProfit', start: 1971, end: 2003 },
    { name: 'Company Four', category: 'Retail', start: 1999, end: 2000 },
    { name: 'Company Five', category: 'Auto', start: 2000, end: 2021 },
    { name: 'Company Six', category: 'Medical', start: 2010, end: 2020 },
    { name: 'Company Seven', category: 'Retail', start: 2011, end: 2015 }
]

const ages = [33,22,12,33,44,45,24,54,65, 66, 72, 91]

const sandwich ={meat:'honey turkey', bread:'white toast', salad:'lettuce and tomato', condiments: 'chipotle mayo'}

// topics we are going over 
// forin 
// foreach
// filter
// map
// sort
// reduce


// forin 
// is used when looping through an object to get all key value pairs 
for (const key in sandwich) {
    console.log(key, ": "+sandwich[key]);
}
// the key will be the key in the object meaning meat: 'honey turkey' meat will be the key that is logged
// now we use sandwich[key] to get the value with objects we can use this way such as an array to get the value of that belongs to that specific key, we cant use dot notation sandwich.key because when we use dot notation it will literally look for a key property in our object which we dont have. 


// foreach
// is a array method for looping 
companies.forEach(ele=>console.log(ele))
// this will log each element in the array one by one, 
// ele here is our object, we can use the dot notation to access certain props in each object 
// as of now we are logging object 
// example of whats being logged but all of the objects in the array this one
// { name: 'Company One', category: 'Finance', start: 1981, end: 2003 }


// filter
// this method creates a new array with all the elements that passes the test implemented by the function 
// our test would be age>60 so any element that is higher then 60 will be passed to the new array agesAbove60
const agesAbove60 = ages.filter(age=>age>60)
console.log(agesAbove60);
// [65, 66, 72, 91]

// for it would look with out the filter method
let agesLower60 = []
for (let i = 0; i < ages.length; i++) {
    if (ages[i]<60){
        agesLower60.push(ages[i])
    }
    
}
console.log(agesLower60);
// [33, 22, 12, 33, 44, 45, 24, 54]


// we can also use the filter method with an array of objects 

const oldCompanies = companies.filter(company => company.start < 1995 )
console.log(oldCompanies);
//  [{…}, {…}, {…}]
// we get an array of 3 objects of companies that stared before 1995
// { name: 'Company One', category: 'Finance', start: 1981, end: 2003 }
// {name: 'Company Two', category: 'Tech', start: 1991, end: 2013}
// {name: 'Company Three', category: 'NonProfit', start: 1971, end: 2003}

// in this array we will be filtering for companies that have a category of Retail
const retailCompanies = companies.filter(company => company.category === 'Retail')
console.log(retailCompanies);
// [{…}, {…}]
// {name: 'Company Four', category: 'Retail', start: 1999, end: 2000}
// {name: 'Company Seven', category: 'Retail', start: 2011, end: 2015}

// now lets get companies that lasted 10 years 
const tenYears = companies.filter(company=> (company.end - company.start)>=10)
console.log(tenYears);
// [{…}, {…}, {…}, {…}, {…}]
// we are returned with 5 objects in our new array 

// map
// this method creates a new array populated with the results of calling a provided function on every element in the calling array
const agesPlus10 = ages.map(ele=> ele+10)
console.log(ages);//[33, 22, 12, 33, 44, 45, 24, 54, 65, 66, 72, 91]
console.log(agesPlus10);//[43, 32, 22, 43, 54, 55, 34, 64, 75, 76, 82, 101]

// now you can use map without storing in the new array in a variable or const
// such as we have here this will log every element in the array with a plus 10
ages.map(ele => console.log( ele + 10))
// 43
// 32
// 22
// etc all of the elements in the array 

// create an array of company names with map
const companyNames = companies.map(company=>company.name)
console.log(companyNames);
// ['Company One', 'Company Two', 'Company Three', 'Company Four', 'Company Five', 'Company Six', 'Company Seven']

//  we returned a new array with just company names
const companyObjectNames = companies.map(company=>{return { name : company.name}})
console.log(companyObjectNames);
// [{…}, {…}, {…}, {…}, {…}, {…}, {…}]
// 0: {name: 'Company One'} , etc....

//Map also takes a a second parameter index
//  it is optional but the index of the current element being processed in the array.
const companyNamesWithIndex = companies.map((company, idx)=> `${idx} ${company.name}`)
console.log(companyNamesWithIndex);
// ['0 Company One', '1 Company Two', '2 Company Three', '3 Company Four', '4 Company Five', '5 Company Six', '6 Company Seven']


// Sort method
// method sorts the elements iof an array inplace and returns the sorted array meaning it will sort the method that its called on 
console.log(ages);//[33, 22, 12, 33, 44, 45, 24, 54, 65, 66, 72, 91]
ages.sort()//we dont have to store this in to an different variable
console.log(ages);//[12, 22, 24, 33, 33, 44, 45, 54, 65, 66, 72, 91]

// lets sort the companies by the start year
console.log(companies);
const sortedCompaniesLowtoHigh = companies.sort((a , b)=>{
   return a.start - b.start //this will be from low to high /ascending order
})
// this returns the array from oldest start date 
console.log(sortedCompaniesLowtoHigh);
console.log(companies);// the original array has also changed to the sorted preference, we dont need to store it into a variable but it will keep things organized 

// if you want it from descending order just reverse the operation from a -b to b-a
const sortedCompaniesHightoLow = companies.sort((a,b)=> b.start - a.start)
console.log(sortedCompaniesHightoLow);
// this returns the array from the most recent start date 


// Reduce 
// the reducer walks through the array element by element, at each each step adding 
//the current array value to the result from the previous step - until there are no 
//more elements to add. this results in summing up all the elements 

const sumAllAges = ages.reduce((preV, curV)=>preV+curV)
console.log(sumAllAges);

// there is also another syntax for this reduce method, where can initialize the initial value instead of starting at 0 then summing up the array, for example you can have your initial value 10 then reduce the array with 10 being the first value that is summed

// example 

const testArray = [1, 2, 3, 4, 5]
const sumTest = testArray.reduce((p, c)=>p+c)
// 0 +1+2+3+4+5 = 15
console.log(sumTest);//15 
const sumTestWithInitialValue = testArray.reduce((p, c)=>p+c, 10)
//10 + 1 +2 +3+4+5 = 25
console.log(sumTestWithInitialValue);//25
// the initial value here is 10 

const p = {
    'hello-world':'world'
}
console.log(p['hello-world']);

testArray.sort((a, b)=>b-a)
console.log(testArray);

const moreThen3 = testArray.filter(a=>a>3)
console.log(moreThen3);
const total = moreThen3.reduce((a,b)=>a+b, 10)
console.log(total);