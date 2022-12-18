const child = document.getElementById('child')
const parent = document.getElementById('parent')

parent.addEventListener('click', () => alert('im parent'))
child.addEventListener('click', (event)=>{
    event.stopPropagation();
    alert('im child')})