
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

// const array = [1,2,3,4]

// array.forEach(console.log)

// fetch video https://www.youtube.com/watch?v=Vj7W8pI-L6w

fetch(kanyeSays)
.then(data=>data.json())// like this it is returned as a json then converted to js with .json() 
// .then(data=>{
// 	console.log(data.text())
// 	//like this we will get it back as a text and we dont wont to work with a text
// }) 
.then(data=>console.log(data))
.catch(console.error)