const userInput = document.getElementById('input-stuff');
const addBtn = document.getElementById('btn-add');
const userInput2 = document.getElementById('input-stuff2');
const addBtn2 = document.getElementById('btn-add2');   
const userInput3 = document.getElementById('input-stuff3');
const addBtn3 = document.getElementById('btn-add3');   

//one way 
const alerting = ()=>alert('Hey ' + userInput.value);
addBtn.addEventListener('click', alerting);

  

//second way 
const alerting2 = ()=> {
    alert(userInput2.value);
    const str1 = userInput2.value
console.log(str1);
}
addBtn2.addEventListener('click', alerting2);


//trying to figure out how to save input into a variable


let savedInput;

const alerting3 = ()=>{
    savedInput = userInput3.value;
    alert(savedInput);
    console.log(savedInput);
}
addBtn3.addEventListener('click', alerting3);
console.log(savedInput)
