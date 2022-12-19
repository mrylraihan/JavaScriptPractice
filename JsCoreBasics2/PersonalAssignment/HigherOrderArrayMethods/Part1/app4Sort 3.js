const companies = [
    { name: 'Company One', category: 'Finance', start: 1981, end: 2003 },
    { name: 'Company Two', category: 'Tech', start: 1991, end: 2013 },
    { name: 'Company Three', category: 'NonProfit', start: 1971, end: 2003 },
    { name: 'Company Four', category: 'Retail', start: 1999, end: 2000 },
    { name: 'Company Five', category: 'Auto', start: 2000, end: 2021 },
    { name: 'Company Six', category: 'Medical', start: 2010, end: 2020 },
    { name: 'Company Seven', category: 'Retail', start: 2011, end: 2015 },
];

const ages = [33, 12, 44, 55, 14, 7, 24, 41, 54, 29, 21];

const letter = ['w', 'a', 'y', 'e', 'l'];

console.log(letter);
const sortedLetters = letter.sort()
console.log(sortedLetters);
console.log(letter);

console.log(ages);
const sortedAges = ages.sort((a,b)=>a-b)
console.log(sortedAges);
console.log(ages);

console.log(companies);
const sortedCompanyByYear = companies.sort((a,b)=>a.start-b.start)
console.log(sortedCompanyByYear);
console.log(companies);


// how to by company name when sorting strings in a object its a little more work
console.log(companies);
const sortedCompanyNamesByName = companies.sort((a, b) => (a.name < b.name) ? -1 : (a.name > b.name) ? 1 : 0)
console.log(sortedCompanyNamesByName);// sorted by the name 
console.log(companies);

const wordList = ["Wallie", 'Heshow', 'Hisham', 'Amel', 'Shajan', 'hana']

console.log(wordList);//['Wallie', 'Heshow', 'Hisham', 'Amel', 'Shajan', 'hana']
console.log(wordList.sort())
const wordObjectList = [{name:"Wallie"}, {name:'Heshow'}, {name:'Hisham'}, {name:'Amel'}, {name:'Shajan'}, {name:'hana'}]

console.log(wordObjectList);
console.log(wordObjectList.sort((a,b)=>(a.name < b.name)?-1:(a.name>b.name)?1:0));//names are sorted in alphabetical order

console.log();