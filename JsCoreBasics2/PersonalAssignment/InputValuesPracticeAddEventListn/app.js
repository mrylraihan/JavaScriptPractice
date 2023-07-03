const btn = document.querySelector('button')
const p = document.querySelector('p')
const input = document.querySelector('input')

btn.addEventListener('click', ()=>{
    p.innerText = ""
    input.value = ""
})

input.addEventListener('input', (e)=>{
    p.innerText = e.target.value
})
