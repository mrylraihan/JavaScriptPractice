const kanye = 'https://api.kanye.rest/'

const listOfQuotes = []

const fetchKanye = () =>{
    const response = fetch(kanye)
    .then(res=> res.json())
    .then(result=>{
        listOfQuotes.push(result.quote)
        console.log(result.quote)})
    .catch((err=>console.log(err)))
}

const asyncKanye = async()=>{
    try {
        const res = await fetch(kanye)
        const data = await res.json()
        listOfQuotes.push(data.quote)
        console.log(data.quote);
    } catch (error) {
        console.log(error);
    }
}

const axiosKanye = ()=>{
    axios.get('https://api.kanye.rest/')
    .then(data=>{
        listOfQuotes.push(data.data.quote)
        console.log(data.data.quote);
    })
    .catch(error=>console.log(error))
}





export { fetchKanye, asyncKanye, axiosKanye, listOfQuotes }