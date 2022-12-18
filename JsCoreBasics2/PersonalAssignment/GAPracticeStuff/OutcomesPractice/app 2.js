const DUMMY_EXPENSES = [
    { id: 'e1', title: 'Toilet Paper', amount: 294.67, date: new Date(2021, 9, 11) },
    { id: 'e2', title: 'New TV', amount: 314.99, date: new Date(2021, 1, 10) },
    { id: 'e3', title: 'Car Insurance', amount: 56.76, date: new Date(2020, 2, 18) },
    { id: 'e4', title: 'New Sit/Stand Desk(Ebony Wood)', amount: 235.36, date: new Date(2021, 2, 28) }
]


const filteredList = DUMMY_EXPENSES.filter(item=>{
    return item.date.getFullYear() === 2021
})

console.log(filteredList);
console.log("it worked!");