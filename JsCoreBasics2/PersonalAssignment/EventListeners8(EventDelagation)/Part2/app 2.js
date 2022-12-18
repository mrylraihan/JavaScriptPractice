//Event Delegation
// Is a way you can add an event listener once for multiple elements with 
//support for adding extra children
//Event delegation allow you to remove and add elements to the parent and pass and delegate the event to the 

// const list = document.querySelectorAll('.child')
// console.log(list);//NodeList(10) [li.child, li.child, li.child, li.child, li.child, li.child, li.child, li.child, li.child, li.child]

// const newList = Array.from(list)
// console.log(newList);//(10) [li.child, li.child, li.child, li.child, li.child, li.child, li.child, li.child, li.child, li.child]

// list[0].addEventListener('click', ()=>console.log('q item clicked'))
// newList[1].addEventListener('click', ()=>console.log('ay item clicked'))


// // or you can do it in one line 
//list 1
const children = Array.from(document.querySelectorAll('.child'))
console.log(children);//(10) [li.child, li.child, li.child, li.child, li.child, li.child, li.child, li.child, li.child, li.child]

children.forEach(child=>{
    child.addEventListener('click',()=> console.log(child.innerHTML, ": AddEventListener"))//or TextContent you will get the same result
})


//using Event delegation
const parent = document.getElementById('myList2')
console.log(parent);//locating the parent
// parent.addEventListener('click', e =>{//add the event to the parent
//     if (e.target.matches('li')) {//use a conditional to specify where u want the event to be activated
//         console.log(e.target.innerHTML, ": Event Delagation");
//     }
// }) 


parent.addEventListener('click', (e) => {
    console.log(e.target.closest('li').innerHTML + ' :Event Delegation');
}) 