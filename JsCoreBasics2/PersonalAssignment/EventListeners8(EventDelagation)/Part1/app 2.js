//Event Delegation
// Is a way you can add an event listener once for multiple elements with 
//support for adding extra children
//Event delegation allow you to remove and add elements to the parent and pass and delegate the event to the 

const myList = document.getElementById('myList')
const div = document.querySelector('div')

//when we pass in the event we can see the target which caused the event
//the target is what will help us located the element we want manipulate 
myList.addEventListener('click', e=>{
    console.log(e);//logs the event
    if (e.target.matches('li')) {//e.target is what caused the event so the element on our dom that we clicked 
        e.target.style.backgroundColor = 'red'// now each event.target will get changed 
    }
    e.stopPropagation();
})

div.addEventListener('click', ()=>console.log('clicked on DIV'))

const newLi = document.createElement('li')
newLi.textContent = 'Wallie';
myList.appendChild(newLi)