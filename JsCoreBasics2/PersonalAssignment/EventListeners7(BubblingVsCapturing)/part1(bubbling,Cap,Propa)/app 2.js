// bubbling
const form = document.getElementById('form')
const div = document.getElementById('div')
const p = document.getElementById('p')


form.addEventListener('click', ()=>console.log('form'))
div.addEventListener('click', ()=>console.log('div'))
p.addEventListener('click', ()=>console.log('p'))

// Capturing
const form2 = document.getElementById('form2')
const div2 = document.getElementById('div2')
const p2 = document.getElementById('p2')

form2.addEventListener('click', () => console.log('form2'), true)
div2.addEventListener('click', () => console.log('div2'), true)
p2.addEventListener('click', () => console.log('p2'))



// Stop Propagation
const form3 = document.getElementById('form3')
const div3 = document.getElementById('div3')
const p3 = document.getElementById('p3')

form3.addEventListener('click', () =>console.log('form3'))
div3.addEventListener('click', e => {
    e.stopPropagation();
    console.log('div3')} )
p3.addEventListener('click', e => {
    e.stopPropagation();
    console.log('p3')})



// adding events to all elements with bubbling 
//locate the div or section where your elements are 
//nested 
const mainDiv = document.getElementById('mainDiv')

mainDiv.addEventListener('click', ()=>console.log('i was clicked'))

const buttonsInMainDiv= mainDiv.querySelectorAll('button')
buttonsInMainDiv[3].addEventListener('click', ()=>console.log('with prop'))
buttonsInMainDiv[4].addEventListener('click', e=>{
    e.stopPropagation();
    console.log('without prop')})