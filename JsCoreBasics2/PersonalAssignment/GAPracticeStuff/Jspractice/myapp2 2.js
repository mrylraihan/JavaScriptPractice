const text = document.getElementById('new-todo');
const btn = document.getElementById('generate-todo');
const list = document.querySelector('.todos');

const addingTodos = ()=>{
    if (text.value === '') {                             
        return;
    }
    console.log(text.value);
    const newItem = document.createElement('li');
    newItem.innerText = text.value;
    list.appendChild(newItem);
    text.value = null;

}
btn.addEventListener('click',addingTodos);
