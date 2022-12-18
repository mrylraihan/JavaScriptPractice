
const h1 = document.querySelector('h1');
const sec = document.querySelector('section');
const btn = document.querySelector('button')
const btn1 = document.querySelectorAll('button')[1];

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