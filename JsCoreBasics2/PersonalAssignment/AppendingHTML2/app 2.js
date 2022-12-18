// console.log('im working') testing out if app is connected 
const btn = document.querySelector('button')
const div = document.querySelector('div')

const addSomethingToDiv = ()=>{
 p = document.createElement('p')
 p.innerText = 'hey ima P tag'
 div.appendChild(p)
}

btn.addEventListener('click', addSomethingToDiv)

// input area 

const inputValue = document.getElementById('textArea')
const submitBtn = document.querySelectorAll('button')[1]
const textDiv = document.querySelector('.textBox')

submitBtn.addEventListener('click', ()=>{
    p = document.createElement('p')
    p.innerText = inputValue.value
    textDiv.appendChild(p)
    inputValue.value = ''
})