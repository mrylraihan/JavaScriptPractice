import * as apiCalls from './apiCall.js'

const fetchButton = document.getElementById('fetch')
const asyncButton = document.getElementById('async')
const axiosButton = document.getElementById('axios')
const seeAll = document.getElementById('seeAll')
const listOfQs = document.getElementById('listofQ')
console.log(listOfQs);

const title = document.querySelector('title')

fetchButton.addEventListener('click', apiCalls.fetchKanye)

asyncButton.addEventListener('click', apiCalls.asyncKanye)

axiosButton.addEventListener('click', apiCalls.axiosKanye)


const showAllQuotes = ()=>{
    // will replace the inner html of the to an empty string so we can repopulate it without doubles 
    listOfQs.innerHTML = ''
    title.innerText = 'Kanyes Quotes'
    apiCalls.listOfQuotes.forEach(ele=>{ 
        const li = document.createElement('li')
        li.textContent = ele
        console.log(li)
        listOfQs.append(li)
    })

    console.log(apiCalls.listOfQuotes);
}



seeAll.addEventListener('click', showAllQuotes)

const name = 'mike'
const testBindObject = {name:'wallie'}
function testBind(){
    console.log(`${this.name}`);
}
function testBindParams(a){
    console.log(`${a}`);
}

const test1 = testBind.bind(testBindObject)
test1()

const test2 = testBindParams.bind(this, 'Raihan')
test2()