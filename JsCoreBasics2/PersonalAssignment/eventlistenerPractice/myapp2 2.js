//how to add multiple events to one element by using addEventListner
const select = document.getElementsByName('cars')[0];
select.onclick = function(){
    console.log('you clicked me!');
}

function clickingme (){
    console.log('you are clicking me !!! eventlistner');
}
select.addEventListener('click', clickingme);

function stopClickingMe(){
    console.log('stop please!');
}
select.addEventListener('click', stopClickingMe);

//how to remove an event listener 
select.removeEventListener('click', stopClickingMe);


