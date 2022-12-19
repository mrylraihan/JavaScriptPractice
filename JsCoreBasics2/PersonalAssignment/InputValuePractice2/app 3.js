const h1 = document.querySelector('h1');
const btnList = document.querySelectorAll('button');
const storeBtn = btnList[0];
const showBtn = btnList[1]
const userInput = document.querySelector('input');
console.log(userInput);

let userInputValue = '';

const gettingUserInput = ()=>{
userInputValue = userInput.value
userInput.value = "";
}

const showUserInput = ()=>{
   h1.innerText = "thanks for entering something " + userInputValue;
//    document.write(userInputValue);this will show the input value and remove everything else 
}

storeBtn.addEventListener('click', gettingUserInput);
showBtn.addEventListener('click', showUserInput)