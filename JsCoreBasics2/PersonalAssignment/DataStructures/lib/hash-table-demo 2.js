const { HashTable } = require('./hash-table')

const carHashTable = new HashTable(5)
console.log(' the new car hash table is ', JSON.stringify(carHashTable, null, 2))

carHashTable.insert('make', 'tesla')
carHashTable.insert('mileage', 1000)

console.log(' the new car hash table with make and mileage ', JSON.stringify(carHashTable, null, 2))

carHashTable.insert('year', 2020)
carHashTable.insert('model', 'Model 3')

console.log(' the new car hash table with make and mileage ', JSON.stringify(carHashTable, null, 2))

carHashTable.insert('year', 2022)

console.log(' the new car hash table with make and mileage ', JSON.stringify(carHashTable, null, 2))

console.log(carHashTable.search('year'))
