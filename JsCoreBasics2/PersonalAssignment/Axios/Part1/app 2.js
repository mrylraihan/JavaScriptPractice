const h2 = document.querySelector('h2')
const btn = document.querySelector('button')

function testAxios() {
    axios.get('https://api.kanye.rest/')
    .then(data=>h2.textContent = data.data.quote)
    .catch(error=>console.log(error.response))
}

btn.addEventListener('click', testAxios)