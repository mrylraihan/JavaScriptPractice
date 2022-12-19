function User(name, email, runs) {
	this.name = name
	this.email = email
	this.runs = runs
}

function Run(date, distance, timeTaken) {
	this.date = date
	this.distance = distance
	this.timeTaken = timeTaken
}

User.prototype = {
	totalDistance: function () {
		let result = 0
		// work on accumulator
		for (let i = 0; i < this.runs.length; i++) {
			result += this.runs[i].distance
		}

		// return accumulator
		return result
	},

	longestRunDistance: function () {
		let result = this.runs[0].distance

		for (let i = 1; i < this.runs.length; i++) {
			if (this.runs[i].distance > result) {
				result = this.runs[i].distance
			}
		}

		return result
	},
}

const run1 = new Run('2017-05-25 15:00', 1200, 600)
const run2 = new Run('2017-05-26 15:00', 1100, 700)
const user1 = new User('Mike Something', 'something@gmail.com', [run1, run2])
console.log(user1)
console.log(user1.longestRunDistance())
console.log(user1.totalDistance());
