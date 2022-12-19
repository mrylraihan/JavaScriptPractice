// using this fake api https://jsonplaceholder.typicode.com/
// using the xml http object
// Using Fetch Api , fetch()
const listElement = document.querySelector('.posts')
const postTemplate = document.getElementById('single-post')
const form = document.querySelector('#new-post form')
const fetchButton = document.querySelector('#available-posts button')
const postList = document.querySelector('ul')

function sendHttpRequest(method, url, data) {
	
	return fetch(url, {
		method: method,
		body : JSON.stringify(data),
		headers:{
			'Content-Type': 'application/json'
		}
	}).then(response=>{
		if (response.status >= 200 && response.status < 300) {
			return response.json();
		}else{
		return response.json().then(errData=>{
				console.log(errData);
				throw new Error('something went wrong! -- serverSide')
			});
		}
	}).catch(error=>{
		console.log(error);
		throw new Error('something went wrong')
	});//if you just pass a url it will just send a get request
	
}

function fetchPosts() {
	sendHttpRequest('GET', 'http://localhost:4741/cafes')
		.then((responseData) => {
			const listOfPosts = responseData.cafes
			console.log(listOfPosts)
			console.log(listOfPosts)
			for (const post of listOfPosts) {
				const postEl = document.importNode(postTemplate.content, true)
				postEl.querySelector('h2').textContent = post.name.toUpperCase()
				postEl.querySelector('p').textContent = post.address
				postEl.querySelector('li').id = post._id
				listElement.append(postEl)
			}
		})
		.catch((error) => alert(error.message))
}

async function createPost(email, password) {
	const post = {
		credentials:{
			email: email,
			password: password,
			password_confirmation: password,
		}
	}
	sendHttpRequest('POST', 'http://localhost:4741/sign-up', post)
}

fetchButton.addEventListener('click', fetchPosts)

form.addEventListener('submit', (event) => {
	event.preventDefault()
	const enteredTitle = event.currentTarget.querySelector('#email').value
	const enteredContent = event.currentTarget.querySelector('#password').value
	createPost(enteredTitle, enteredContent)
	event = form.reset()
})

postList.addEventListener('click', (event) => {
	if (event.target.tagName === 'BUTTON') {
		console.log('button was clicked')
		const postLi = event.target.closest('li')
		const postId = postLi.id
		sendHttpRequest(
			'DELETE',
			`https://jsonplaceholder.typicode.com/posts/${postId}`
		)
		postLi.remove()
	}
})
