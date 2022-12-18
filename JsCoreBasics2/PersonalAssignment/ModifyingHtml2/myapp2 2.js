const userInput = document.getElementById('inp');
const btn = document.getElementById('btn');
const headings = document.querySelectorAll('.headings')
const colorSW = document.getElementById('whatColor');

function changeColor(){
    let inputColor = userInput.value.toLowerCase();
    
           for (const ele of headings) {
               ele.style.color = inputColor;
               colorSW.innerText = inputColor;
           }
    }

btn.addEventListener('click', changeColor)