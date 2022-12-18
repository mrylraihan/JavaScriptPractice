const btn = document.querySelector('button')
const btn2 = document.getElementById('btn2')

const ul = document.querySelector('ul')
const div = document.querySelector('div')

const getPostData = ()=>{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res=>res.json())
    .then(result=>{
        console.log(result);
        result.forEach(ele=>{
            const li = document.createElement('li')
            li.innerText = ele.title
            const dBtn = document.createElement('button')
            dBtn.innerText = 'remove element'
            dBtn.addEventListener('click', ()=>li.remove())
            li.appendChild(dBtn)
            ul.appendChild(li)
        })
    })
    .catch(console.error)
}


btn.addEventListener('click', getPostData)

btn2.addEventListener('click', ()=>{
    div.toggleAttribute('hidden')
    console.log(div.hasAttribute('hidden'));
    if(div.hasAttribute('hidden')){
        btn2.innerText = 'show Data'
    }else{
        btn2.innerText = 'hide data'
    }
})
