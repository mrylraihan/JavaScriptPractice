const btn = document.querySelector('button')
const h3 = document.querySelector('h3')

let toggle = false;

//wont do anything 
// if(toggle){
//     h3,innerText = 'True'
// }else{
//     h3.innerText = 'False'
// }
h3.innerText = toggle
btn.addEventListener('click', ()=>{
    if(toggle){
        toggle = false
        h3.innerText = toggle
    }else{
        toggle = true
        h3.innerText = toggle
    }
    return toggle
})

console.log(toggle);