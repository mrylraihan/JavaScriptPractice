// const button = document.querySelector('button')
// const output = document.querySelector('p')
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

const setTimer = (duration) => {
	const promise = new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve('Done!') // will be the return of the promise is successful
		}, duration)
	})
	return promise
}

function trackUserHandler() {
	console.log('Sending positions')
	let positionData
	getPosition()
		.then((posData) => {
			positionData = posData
			return setTimer(2000) //because of this return we are getting a new return from the setTimer which will be data in the next one
		})
		.then((data) => console.log(data, positionData))
		.catch((err) => console.log(err)) // this data is the return of the setTimer
	setTimer(1000).then(() => console.log('Timer is Done'))
	console.log('getting position....')
	// console.log('Another Test')
}
button.addEventListener('click', trackUserHandler)

// Sending positions
//getting position....
//Done!  after other stuff
//before timer in success portion
// Done!1 GeolocationPosition {coords: GeolocationCoordinates, timestamp: 1636038086445}
