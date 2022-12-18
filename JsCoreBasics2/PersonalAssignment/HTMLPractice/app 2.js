const arrNames = [
    {
        name: "Hisham",
        title: "Project Manageer"
    },
    {
        name: "Wayel",
        title: "Instructor"
    },
    {
        name: "Meshia",
        title: "React Developer"
    }
]

// const regEx = /[,]/g

// const htmlEle = arrNames.map(x => '<li>' + x.name + '</li>').toString().replace(regEx, '')

// document.getElementById("cardMap").innerHTML = htmlEle

// console.log(htmlEle)



const p = document.querySelector('#cardMap')
// just forEach 
arrNames.forEach(ele=>{
    const element = document.createElement('li')
    element.innerText = ele.name
    p.appendChild(element)
})

//  mapped and forEach 
const mappedElements = arrNames.map(ele=>{
    const element = document.createElement('li')
    element.innerText = ele.name
    return element
})
console.log(mappedElements);
mappedElements.forEach(element => {
    p.appendChild(element)
});