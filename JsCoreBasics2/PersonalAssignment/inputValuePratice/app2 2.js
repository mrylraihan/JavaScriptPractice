const userInput = document.getElementById('input-stuff');
const addBtn = document.getElementById('btn-add');
const userInput2 = document.getElementById('input-stuff2');
const addBtn2 = document.getElementById('btn-add2');   
const userInput3 = document.getElementById('input-stuff3');
const addBtn3 = document.getElementById('btn-add3');   

//one way //but this doesnt store the input anywhere
const alerting = ()=>alert('Hey ' + userInput.value);
addBtn.addEventListener('click', alerting);

  

//second way 

const alerting2 = ()=> {
    const str1 = userInput2.value
    alert(str1);
console.log(str1);
}
addBtn2.addEventListener('click', alerting2);

//trying to figure out how to save input into a variable


let savedInput;
function storingValue(uservalue){
savedInput = uservalue.value; 
return savedInput;
}
const alerting3 = ()=>{
    const newInput = storingValue(userInput3);
    alert(newInput);
    console.log(newInput);
}
addBtn3.addEventListener('click', alerting3);
console.log(savedInput)
