const boxlist = document.querySelectorAll('button')
// const boxNo = document.getElementById('no')

// console.log(boxlist);

// const hello = ()=> console.log('hello');
// const noFunc = ()=> console.log('Nofunc');

// boxlist.forEach(box=>box.addEventListener('click', hello))

// boxlist[3].addEventListener('dblclick',noFunc)

boxlist[0].addEventListener('click',()=>document.querySelector('h1').innerText = 'Taha says Hi')
console.log(boxlist);
boxlist[3].addEventListener('click', ()=>document.querySelector('h1').innerText = '')


const name = 'Taha'

const alertHi = ()=>{
    alert('hey '+name)
}

const bindedFuc = alertHi.bind(this)

boxlist.forEach(box=>box.addEventListener('click', bindedFuc))

boxlist[3].removeEventListener('click', ()=>{boxlist.forEach(box=>box.removeEventListener('click', bindedFuc))})

