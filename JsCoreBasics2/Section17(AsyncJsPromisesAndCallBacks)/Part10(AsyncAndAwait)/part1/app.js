const button = document.querySelector('button')
const output = document.querySelector('p')

const getPosition = (opts) => {
	const promise = new Promise((resolve, reject) => {
		navigator.geolocation.getCurrentPosition(
			(success) => {
				resolve(success)
			},
			(error) => {
				reject(error)
			},
			opts
		)
	})
	return promise
}

const setTimer = async (duration) => {
	const promise = new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve('Done!')
		}, duration)
	})
	return promise
}

async function trackUserHandler() {
    console.log('hey');
	// let positionData
	const posData = await getPosition();
    const timerData = await setTimer(2000)
    console.log(timerData, posData)
		// .then((posData) => {
		// 	positionData = posData
		// 	return setTimer(2000)
		// })
		// .catch((err) => {
		// 	console.log(err)
		// 	return 'on we go...  '
		// })
		// .then((data) => console.log(data, positionData))
	// setTimer(1000).then(() => console.log('Timer is Done'))
	// console.log('getting position....')
	console.log('hey')
}

button.addEventListener('click', trackUserHandler)
