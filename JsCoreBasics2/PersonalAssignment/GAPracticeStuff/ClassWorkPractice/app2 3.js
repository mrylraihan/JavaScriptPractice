function User(name, bornOn, calT, meals) {
	this.name = name
	this.bornOn = bornOn
	this.calorieTarget = calT
	this.meals = meals
}
User.prototype.caloriesEatenOn = function (d) {
	let totalCalories = 0
	this.meals.forEach((ele) => {
		if (ele.date === d) {
			totalCalories += ele.calories
		}
	})
	return totalCalories
}

User.prototype.avgDailyCalories = function () {
	let totalCalories = 0
	const days = []
	this.meals.forEach((ele) => {
		totalCalories += ele.calories
		if (!days.includes(ele.date)) {
			days.push(ele.date)
		}
	})

	return Math.floor(totalCalories / days.length)
}

User.prototype.ontrack = function () {
	const avgDC = user1.avgDailyCalories()
	if (avgDC > this.calorieTarget) {
		return false
	} else {
		return true
	}
}
User.prototype.moreDetails = function () {
	const arrayofDates = []
	const fullCaliorcounter = []
	let passOrFail = false
	this.meals.forEach((ele) => {
		if (!arrayofDates.includes(ele.date)) {
			arrayofDates.push(ele.date)
		}
	})
	arrayofDates.forEach((ele) => {
		const totalfortheDay = this.caloriesEatenOn(ele)

		if (totalfortheDay < this.calorieTarget) {
			passOrFail = true
		}
		fullCaliorcounter.push(totalfortheDay + ' ' + ele + ' ' + passOrFail)
	})
	console.log(fullCaliorcounter)
	//use the first function
}

const mealsWeek = [
	{
		title: 'Lunch',
		date: '2021-09-15',
		description: 'Pizza',
		calories: 500,
	},
	{
		title: 'Dinner',
		date: '2021-09-15',
		description: 'Steak',
		calories: 1000,
	},
	{
		title: 'Lunch',
		date: '2021-09-16',
		description: 'Tuna Sandwich',
		calories: 700,
	},
	{
		title: 'Dinner',
		date: '2021-09-17',
		description: 'Salmon',
		calories: 1000,
	},
]

const user1 = new User('Wallie', '1-1-1', 2000, mealsWeek)
console.log(user1)

console.log(user1.ontrack())
console.log(user1.caloriesEatenOn())
console.log(user1.avgDailyCalories())
console.log(user1.moreDetails())
