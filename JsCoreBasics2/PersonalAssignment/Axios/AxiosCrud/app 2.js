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
    axios.get(url)
    .then(res=>res.data)
    .then(console.log)
    .catch(console.error)
}
btn1.addEventListener('click', fetchAll)

const getOneById = ()=>{
    axios.get(url+editId)
    .then(res=>res.data)
    .then(console.log)
    .catch(err=>console.log(err))
}
btn1_5.addEventListener('click', getOneById)

function createGundam(){
    const data = { pilot : 'Duo', gundam:'DeathSyth' };

    axios.post(url,data)
    .then(res=>res.data)
    .then(data=>console.log("Success: ", data))
    .catch(error=>console.log("Error: ", error))
}
btn2.addEventListener('click', createGundam)

function editWholeGundam(){
    const data = { pilot: 'Wayel Raihan', gundam:'Mars' };
    
    axios.put(url + editId,data)
    .then(res => res.data)
    .then(data => console.log("Success: ", data))
    .catch(error => console.log("Error: ", error))
}
btn3.addEventListener('click', editWholeGundam)

function editGundam(){
    const data = { pilot: 'Duo Maxwell' };
    
    axios.patch(url + patchId, data)
        .then(res => res.data)
        .then(data => console.log("Success: ", data))
        .catch(error => console.log("Error: ", error))
}
btn4.addEventListener('click', editGundam)

function deleteGundam(){
    
    axios.delete(url + deletedId)
        .then(res => res.data)
        .then(data => console.log("Success: ", data))
        .catch(error => console.log("Error: ", error))
}

btn5.addEventListener('click', deleteGundam)

const btn6 = document.getElementById('btn6')
const btn7 = document.getElementById('btn7')

const fetchAllGundams = () => {
    axios.get(url + 'gundam')
        .then(res => res.data)
        .then(data => console.log("Success: ", data))
        .catch(error => console.log("Error: ", error))
}
btn6.addEventListener('click', fetchAllGundams)
const fetchAllPilots = () => {
    axios.get(url + 'pilots')
        .then(res => res.data)
        .then(data => console.log("Success: ", data))
        .catch(error => console.log("Error: ", error))
}
btn7.addEventListener('click', fetchAllPilots)