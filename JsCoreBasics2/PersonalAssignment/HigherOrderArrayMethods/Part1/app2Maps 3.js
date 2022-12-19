//Working with array.maps
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
//the second param is the index 
//Arrays.Map with arrow function
const companyNames = companies.map((a,i)=>  ++i+' names: '+a.name);
console.log(companyNames);
//Logs (7) ['1 names: Company One', '2 names: Company Two', '3 names: Company Three', '4 names: Company Four', '5 names: Company Five', '6 names: Company Six', '7 names: Company Seven']

//Arrays.Map without arrow function 

const companyNames2 = companies.map(function(company) {
    return company.name
});

console.log(companyNames2);//(7) ['Company One', 'Company Two', 'Company Three', 'Company Four', 'Company Five', 'Company Six', 'Company Seven']


//Map an array to the startDate and endDate and use an index
const test1 = companies.map(function (company, idx) {
	return `${++idx} : ${company.name} [${company.start} - ${company.end}]`;
});

console.log(test1);//(7) ['1 : Company One [1981 - 2003]', '2 : Company Two [1991 - 2013]', '3 : Company Three [1971 - 2003]', '4 : Company Four [1999 - 2000]', '5 : Company Five [2000 - 2021]', '6 : Company Six [2010 - 2020]', '7 : Company Seven [2011 - 2015]']

//With arrow functions 

const test2 = companies.map((company, idx)=> `${++idx} : ${company.name} [${company.start} - ${company.end}]`);
console.log(test2);//(7) ['1 : Company One [1981 - 2003]', '2 : Company Two [1991 - 2013]', '3 : Company Three [1971 - 2003]', '4 : Company Four [1999 - 2000]', '5 : Company Five [2000 - 2021]', '6 : Company Six [2010 - 2020]', '7 : Company Seven [2011 - 2015]']

//square all the ages 

const agesSquared = ages.map(a => Math.sqrt(a));
console.log(agesSquared);
//(11)[
// 	(5.744562646538029,
// 	3.4641016151377544,
// 	6.6332495807108,
// 	7.416198487095663,
// 	3.7416573867739413,
// 	2.6457513110645907,
// 	4.898979485566356,
// 	6.4031242374328485,
// 	7.3484692283495345,
// 	5.385164807134504,
// 	4.58257569495584)
// ]

const agesByTwo = ages.map(a => a*2);
console.log(agesByTwo);//(11) [66, 24, 88, 110, 28, 14, 48, 82, 108, 58, 42]

// we can also chain mapping 

const minus1andMultby2 = ages.map(a => a-1).map(a=> a*2);
console.log(minus1andMultby2);//(11) [64, 22, 86, 108, 26, 12, 46, 80, 106, 56, 40]