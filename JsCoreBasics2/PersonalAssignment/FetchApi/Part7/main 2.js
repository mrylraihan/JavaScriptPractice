
// the fetch in both are promises 
const btn = document.querySelector('button')
const kanyeSays = 'https://api.kanye.rest/'
const element = document.createElement('p')




function fetchKanyeQuote(url) {
	const res = fetch(url)
	console.log(res);	
	res.then((res) => res.json())
		.then((result) => {
			element.textContent =result.quote
			btn.parentNode.insertBefore(element, btn)
			console.log(result)})
		.catch((err) => console.log(err))
}

// fetchKanyeQuote(kanyeSays)

btn.addEventListener('click', fetchKanyeQuote.bind(this, kanyeSays))


const dogBtn = document.getElementById('dogBtn')
const dogUrl = 'https://dog.ceo/api/breeds/image/random'
const img = document.getElementById('dog')

const fetchDog=(url)=>{
	fetch(url)
	.then(resp=>resp.json())
	.then(json=>{
		console.log(json);
		console.log(json.message);
		img.src = json.message
	})
	.catch(error=>console.log(error))
}

dogBtn.addEventListener('click',fetchDog.bind(this,dogUrl))

const element2 = document.createElement('p')
const userUrl = 'https://randomuser.me/api'

const fetchUser=(url)=>{
	fetch(url)
	.then(resp=>resp.json())
	.then(json=>{
		console.log(json);
		console.log(json.results[0].gender);
		console.log(json.results[0].name);
		console.log(json.results[0].name.first);
		console.log(json.results[0].name.last);
		element2.textContent = json.results[0].name.first + " " + json.results[0].name.last
		userBtn.parentNode.insertBefore(element2, userBtn)
		
	})
	.catch(error=>console.log(error))
}

userBtn.addEventListener('click',fetchUser.bind(this,userUrl))