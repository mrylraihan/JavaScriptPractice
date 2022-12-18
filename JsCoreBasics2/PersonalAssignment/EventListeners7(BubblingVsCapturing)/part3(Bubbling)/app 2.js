const div = document.querySelector('div')

div.addEventListener('click', (e)=>{
    if (e.target.matches('button')) {
        console.log(e.target.innerHTML);
    }
})