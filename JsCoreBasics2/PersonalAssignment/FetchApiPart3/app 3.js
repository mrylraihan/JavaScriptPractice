const btn = document.querySelector('button')
const animeApi = `https://anime-facts-rest-api.herokuapp.com/api/v1/${userSearch}`

const fetchData = ()=>{
    fetch(animeApi)
    .then(result=>result.json())
    .then(res=>
        console.log(res.data)
        //here is where you would do your create or put method to store the facts they like=
    
    )
    .catch(err=>console.log(err))
}

btn.addEventListener('click', fetchData)
