const btn1 = document.getElementById('btn1')
const btn1_5 = document.getElementById('btn1_5')
const btn2 = document.getElementById('btn2')
const btn3 = document.getElementById('btn3')
const btn4 = document.getElementById('btn4')
const btn5 = document.getElementById('btn5')


const url = 'http://localhost:4000/gundams/'
const editId = 1
const deletedId = 5
const patchId = 4


const fetchAll = ()=>{
    const res = fetch(url)
    console.log(res)
    res.then(res=>res.json())
        .then(result=>{
            console.log(result);
        }).catch(err=>console.log(err))
}
btn1.addEventListener('click', fetchAll)
const getOneById = ()=>{
    const res = fetch(url+editId)
    console.log(res)
    res.then(res=>res.json())
        .then(result=>{
            console.log(result);
        }).catch(err=>console.log(err))
}
btn1_5.addEventListener('click', getOneById)

function createGundam(){
    const data = { pilot : 'Duo', gundam:'DeathSyth' };

    return fetch(url, {
        method: 'POST',
        headers: {
            "Content-Type":"application/json",
        },
        body: JSON.stringify(data),
    }).then(res=>res.json())
    .then(data=>console.log("Success: ", data))
    .catch(error=>console.log("Error: ", error))
}
btn2.addEventListener('click', createGundam)

function editWholeGundam(){
    const data = { pilot: 'Wayel Raihan', gundam:'Mars' };
    
    return fetch(url + editId, {
        method: 'PUT',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    }).then(res => res.json())
    .then(data => console.log("Success: ", data))
    .catch(error => console.log("Error: ", error))
}
btn3.addEventListener('click', editWholeGundam)

function editGundam(){
    const data = { pilot: 'Duo Maxwell' };
    
    return fetch(url + patchId, {
        method: 'PATCH',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    }).then(res => res.json())
    .then(data => console.log("Success: ", data))
    .catch(error => console.log("Error: ", error))
}
btn4.addEventListener('click', editGundam)

function deleteGundam(){
    
    return  fetch(url + deletedId, {
        method: 'DELETE',
        headers: {
            "Content-Type": "application/json",
        }
    }).then(res => res.json())
    .then(data => console.log("Success: ", data))
    .catch(error => console.log("Error: ", error))
}

btn5.addEventListener('click', deleteGundam)

const btn6 = document.getElementById('btn6')
const btn7 = document.getElementById('btn7')

const fetchAllGundams = () => {
    const res = fetch(url+'gundam')
    console.log(res)
    res.then(res => res.json())
        .then(result => {
            console.log(result);
        }).catch(err => console.log(err))
}
btn6.addEventListener('click', fetchAllGundams)
const fetchAllPilots = () => {
    const res = fetch(url+'pilots')
    console.log(res)
    res.then(res => res.json())
    .then(result => {
        console.log(result);
    }).catch(err => console.log(err))
}
btn7.addEventListener('click', fetchAllPilots)


// update one but get all
const btn8 = document.getElementById('btn8')
const updateOneButGetAll = ()=>{
    const pilotId = '628bc2e8011bbfbfe344c313'
    const data = { gundam:'628bc2e8011bbfbfe344c30d'}
    fetch(`http://localhost:3000/pilots/${pilotId}/allgundams`, {
        method:"PUT", 
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    })
    .then(result=>result.json())
    .then(newFull=>console.log(newFull))
    .catch(err=>console.log(err))
}
btn8.addEventListener('click', updateOneButGetAll)
