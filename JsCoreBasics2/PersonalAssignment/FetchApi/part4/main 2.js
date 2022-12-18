
// the fetch in both are promises 
// const h1 = document.getElementById('h1')
const btn = document.querySelector('button')
const emailList = document.querySelector('ul')


function fetchAllUsers() {
	
	const res = fetch('http://localhost:4741/cafes')
		.then((res) => {
			return res.json()
		})
		.then((result) => {
			console.log(result, 'promises')
			const user = result.user
			user.forEach(ele => {
				const li = document.createElement('li')
				li.textContent = ele.email
				emailList.appendChild(li)
				console.log(ele.email);
			});
		})
		.catch((err) => console.log(err))
}

btn.addEventListener('click', fetchAllUsers)
