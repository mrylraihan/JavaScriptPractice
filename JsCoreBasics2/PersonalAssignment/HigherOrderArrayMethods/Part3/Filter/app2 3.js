// filter creating a shallow copy meaning its still point to the same object 

const person = {name:'wallie', age:30 }

const nameList = [
    { name: 'Brian', age: 30 },
    { name: 'Ryan', age: 30 },
    { name: 'Mike', age: 30 },
    person
]

const filteredPerson = nameList.filter(ele=>ele.name === 'wallie')[0]
console.log(filteredPerson);//{ name: 'wallie', age: 30 }
filteredPerson.id = 001
console.log(filteredPerson);//{ name: 'wallie', age: 30, id: 1 }
console.log(nameList[3])//{ name: 'wallie', age: 30, id: 1 }
console.log(person);//{ name: 'wallie', age: 30, id: 1 }
