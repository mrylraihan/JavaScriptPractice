const MONDAY = '2021-09-15'
const TUESDAY = '2021-09-16'
const WEDNESDAY = '2021-09-17'
const user = {
	name: 'Bruce Wayne',
	bornOn: '10-01-1000',
	calorieTarget: 1500,
	meals: [
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
	],
	caloriesEatenOn: function (d) {
		let totalCalories = 0
		this.meals.forEach((ele) => {
			if (ele.date === d) {
				totalCalories += ele.calories
			}
		})
		return totalCalories
	},
	avgDailyCalories: function () {
		let totalCalories = 0
		const days = []
		this.meals.forEach((ele) => {
			totalCalories += ele.calories
			if (!days.includes(ele.date)) {
				days.push(ele.date)
			}
		})

		return Math.floor(totalCalories / days.length)
	},

	ontrack: function () {
		const avgDC = user.avgDailyCalories()
		if (avgDC > this.calorieTarget) {
			return false
		} else {
			return true
		}
	},

	moreDetails: function () {
		//getDates function
		const datesArray = []
		this.meals.forEach((meal) => {
			if (!datesArray.includes(meal.date)) {
				datesArray.push(meal.date)
			}
		})
		//create two functions isPassing function and getFullCalCount function 
		const fullCalCounter = []
		let passOrFail = false
		datesArray.forEach((meal) => {
			const totalfortheDay = this.caloriesEatenOn(meal)
			if (totalfortheDay < this.calorieTarget) {
				passOrFail = true
			}
			fullCalCounter.push(
				`total cal for the day ${totalfortheDay}, date: ${meal}, ${passOrFail}`
			)
		})
		console.log(fullCalCounter)
		//use the first function
	},
	//write a function that calculates each day and total of each date and tells u if you missed your target calories count
	// what i can do is use set for the dates
	// (the loop through each set), then i can map the total to that array and say if its true
}

user.moreDetails()
