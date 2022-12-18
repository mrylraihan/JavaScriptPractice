const redp = document.getElementById('p-tag');
redp.onclick = ()=> alert('this is a red p-tag');


const yellowDiv = document.getElementById('yellow');
yellowDiv.onclick = function logColor(){
    alert('this is a yellow div tag');
};


const greenDiv = document.getElementById('green');
greenDiv.onclick = function alertColor(){
    alert('this is a green div tag');
};


const brownElmt = document.getElementById('brown');
brownElmt.style.cssText = "width:200px; height:200px; background:brown;";
const callingBrown = ()=> alert('brown is here!');
brownElmt.addEventListener('click', callingBrown);


const btn = document.getElementById("btn");
const buttonPress = ()=> alert("hey");
btn.addEventListener("click", buttonPress);


const anBtn = document.getElementById("anBtn");
const anotherButton = ()=> alert("another button press");
anBtn.addEventListener("click", anotherButton);


const sahi = document.getElementById('sahi');
sahi.onclick = ()=> console.log('hey im sahi');