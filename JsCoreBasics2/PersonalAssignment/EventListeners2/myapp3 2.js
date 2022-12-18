const btn = document.getElementById('btn')
const div = document.getElementById('div')


btn.addEventListener('click',()=>{
    const newBtn = document.createElement('button')
    newBtn.className = 'listb'
    newBtn.innerText = 'click me again!'
    console.log(newBtn);
    div.append(newBtn)
    
    const allbtns = document.querySelectorAll('.listb');
    allbtns.forEach(ele=>{
        ele.addEventListener('click', ()=>console.log('im clicked'))
    })

})



let count = 0;
console.log(count);
function counting() {
    count++;
    return count;
}
counting();
console.log(count);