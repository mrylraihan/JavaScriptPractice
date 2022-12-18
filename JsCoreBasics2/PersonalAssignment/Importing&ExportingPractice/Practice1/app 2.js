
import { word, array1, Hero } from './app2.js'

const btn = document.getElementById('btn')
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');
const div = document.getElementById('whereHeroGoes');
const heroBtn = document.getElementById('heroBtn');

const batman = new Hero('Bruce Wayne', 'BatMan', 'SuperRich')
const sayWord = ()=>{
    console.log(word);
}

const showArray = a =>{
    a.forEach(ele=> console.log(ele));
}

const whichSuperHero = ()=>{
    console.log(batman.whoAmI())
}

const showSuperHero = ()=>{
  const batmanReturn = batman.whoAmI()
  const p = document.createElement('p')
  const tex = document.createTextNode(`${batmanReturn}`)
  p.appendChild(tex);
  div.appendChild(p)
    
}

btn.addEventListener('click', sayWord);

btn2.addEventListener('click',showArray.bind(this,array1));

btn3.addEventListener('click', whichSuperHero);

heroBtn.addEventListener('click', showSuperHero)
