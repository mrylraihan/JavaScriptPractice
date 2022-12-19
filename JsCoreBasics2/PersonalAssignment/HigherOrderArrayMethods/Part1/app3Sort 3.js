//working with sort method
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

//we want to sort the companies by the start year 

const sortedByStartDate = companies.sort(function(c1, c2) {
    if (c1.start > c2.start) {
        return 1;
    }else if (c1.start === c2.start) {
        return 0
    }else{
        return -1;
    }
});
console.log(sortedByStartDate);
// 0: {name: 'Company Three', category: 'NonProfit', start: 1971, end: 2003}
// 1: {name: 'Company One', category: 'Finance', start: 1981, end: 2003}
// 2: {name: 'Company Two', category: 'Tech', start: 1991, end: 2013}
// 3: {name: 'Company Four', category: 'Retail', start: 1999, end: 2000}
// 4: {name: 'Company Five', category: 'Auto', start: 2000, end: 2021}
// 5: {name: 'Company Six', category: 'Medical', start: 2010, end: 2020}
// 6: {name: 'Company Seven', category: 'Retail', start: 2011, end: 2015}


//with arrowfunctions 
const sortedByYear = companies.sort((a,b) => a.start-b.start);
console.log(sortedByYear);
// 0: {name: 'Company Three', category: 'NonProfit', start: 1971, end: 2003}
// 1: {name: 'Company One', category: 'Finance', start: 1981, end: 2003}
// 2: {name: 'Company Two', category: 'Tech', start: 1991, end: 2013}
// 3: {name: 'Company Four', category: 'Retail', start: 1999, end: 2000}
// 4: {name: 'Company Five', category: 'Auto', start: 2000, end: 2021}
// 5: {name: 'Company Six', category: 'Medical', start: 2010, end: 2020}
// 6: {name: 'Company Seven', category: 'Retail', start: 2011, end: 2015}

//sort by category name
const sortedByCatagory = [];
companies.forEach(element => {
    sortedByCatagory.push(element.category);
});
console.log(sortedByCatagory.sort());
//(7)[('Auto', 'Finance', 'Medical', 'NonProfit', 'Retail', 'Retail', 'Tech')]

const letter = ['w','a','y','e','l'];
letter.sort();
console.log(letter);//(5)[('a', 'e', 'l', 'w', 'y')]

//sorting numbers ages
const sortedAges = ages.sort();
console.log(sortedAges);//(11) [12, 14, 21, 24, 29, 33, 41, 44, 54, 55, 7]
//for numbers the sort method has an issues with single digits
//so you need to add an extra condition to fix it 

const sortedAges2 = ages.sort((a,b)=>a-b);
console.log(sortedAges2);//(11) [7, 12, 14, 21, 24, 29, 33, 41, 44, 54, 55]