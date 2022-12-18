const btn = document.querySelector('button');
const div = document.querySelector('div')
const colors = ['red', 'blue', 'green']
let num = 0;
div.addEventListener('click', ()=>{
    num = num === 3 ? 0: num;
    div.style.backgroundColor = colors[num];
    ++num;
})

btn.addEventListener('click', ()=>{
    div.click();
})