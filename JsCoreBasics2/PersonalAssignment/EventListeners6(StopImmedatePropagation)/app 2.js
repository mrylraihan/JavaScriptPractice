// .stopImmediatePropagation()
// Invoking this method prevents event from reaching any registered event 
//listeners after the current one finishes running and, when dispatched in a 
//tree, also prevents event from reaching any other objects.
const btn = document.querySelector('button')


btn.addEventListener('click', ()=>console.log('Hello'))
btn.addEventListener('click', ()=>alert('Hello'))
btn.addEventListener('click', e=>console.log(e))
//anything after this event is invoked will not run
btn.addEventListener('click', e=>e.stopImmediatePropagation())
btn.addEventListener('click', ()=>console.log('Hisham'))