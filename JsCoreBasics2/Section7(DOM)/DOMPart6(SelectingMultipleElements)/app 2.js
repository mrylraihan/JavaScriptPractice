//Selecting Multiple elements
//this will return all the li elements in an array
const allLis = document.querySelectorAll('li');
//you then access the element you by index 
console.log(allLis[0]);//<li></li>
console.log(allLis[1]);//<li className="list-item"></li>
console.log(allLis[2]);//<li className="list-item"></li>

//or you can iterate through it
for (const ele of allLis) {
    console.log(ele);
}

const tagNameList = document.getElementsByTagName('li');

for (const ind of tagNameList) {
  console.log(ind);
}


const h1 = document.getElementById('main-title');
h1.textContent = 'Another text!';
h1.style.color = 'grey';
h1.style.backgroundColor = 'red';

const lastLI = document.querySelector('li:last-of-type');
lastLI.textContent += ' (changed)';

const body = document.body;

const listOrLi= body.querySelectorAll('li');
listOrLi[1].textContent += ' (changed with body)'

const firstLi = body.querySelector('li')
firstLi.textContent += ' (changed with querySelector on body)'