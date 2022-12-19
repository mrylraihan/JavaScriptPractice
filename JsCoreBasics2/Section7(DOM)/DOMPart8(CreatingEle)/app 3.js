
const h1 = document.querySelector('h1');
const sec = document.querySelector('section');
const btn = document.querySelector('button')
const btn1 = document.querySelectorAll('button')[1];
const btnitem = document.getElementById('btnitem')
const ul = document.querySelector('ul');
const liList = ul.querySelectorAll('li');
const div = document.querySelector('div');
let lastli;
console.log(btn);
console.log(btn1);

btn.addEventListener('click', ()=>{
  // if (sec.className === 'redz visible') {
  //   sec.className = 'redz invisible'
  // }else{
  //   sec.className = 'redz visible'
  // }

  // sec.classList.toggle('visible');
  sec.classList.toggle('invisible');
});

btn1.addEventListener('click', ()=>{
  // h1.classList.toggle('visible');
  h1.classList.toggle('invisible');
})
lastli = document.querySelector('li:last-of-type');
let liNum = liList.length
btnitem.addEventListener('click',()=>{
  
  // ul.innerHTML += `<li> item ${++liNum}`;
  //or
  ul.insertAdjacentHTML('beforeend',`<li> item ${++liNum}`);
  lastli = document.querySelector('li:last-of-type');
  lastli.onclick = ()=>{alert('last li!')}
  div.insertAdjacentHTML('beforeend', '<h2>hey</h2>');
})
lastli.onclick = ()=>{alert('last li!')}

//creating elements
const newP = document.createElement('p')
newP.textContent = 'hey ima newly create p tag';
newP.className = 'redz'
div.insertAdjacentElement('afterend', newP)

// you call createElement only on document 

const newH1 = document.createElement('h1');// the element you want create
newH1.textContent = 'new H1';//the text you want to add
newH1.classList = 'redz';// the class attribute you want to add
newH1.style.color = 'black';
newP.insertAdjacentElement('afterend', newH1);//inserting the element 
//in insertAdjacentElement('position', element)
const otherLI = document.createElement('li')
newH1.appendChild(otherLI)//adds after
otherLI.append('another li')//adds next too

// more practice

const newerLi = document.createElement('li');
newerLi.textContent = 'another item';

ul. prepend(newerLi);
ul.lastElementChild.before(newerLi);//locates the element and adds before it, 
//can do the same with .after

//we can also do .replace
ul.firstElementChild.replaceWith('hello')