
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