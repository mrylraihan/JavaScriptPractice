const btn = document.querySelector('button');
const userInput = document.querySelector('input')
const h1 = document.querySelector('h1');
const div = document.querySelector('div');

let userInputValue;
h1.style.animation = `type 1s steps(${h1.textContent.length})`
h1.style.width = h1.textContent.length +"ch";


const gettingUserInput = () => {
    userInputValue = userInput.value;
	userInput.value = '';
    const listofH1 = document.querySelectorAll('h1');
    listofH1[listofH1.length-1].classList.remove('stuff');
    let secondH1 = document.createElement('h1');
    secondH1.innerText = userInputValue; 
    secondH1.className = 'stuff';
    secondH1.style.animation = `type ${(secondH1.textContent.length)/10}s steps(${secondH1.textContent.length})`
    secondH1.style.width = (secondH1.textContent.length) +"ch";
    div.append(secondH1);

}

btn.addEventListener('click',gettingUserInput);