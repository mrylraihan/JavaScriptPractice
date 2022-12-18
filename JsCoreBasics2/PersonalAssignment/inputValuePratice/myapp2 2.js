const userInput = document.getElementById('inp');
const headr = document.getElementById('header');
const btn = document.getElementById('btn');


function changeColor(){
    let inputColor = userInput.value.toLowerCase();
    
           return headr.style.color = inputColor;
    }

btn.addEventListener('click', changeColor)