const flour = {
	name: 'flour',
	location: 'pantry',
}
const butter = {
	name: 'butter',
	location: 'fridge',
}
const sugar = {
	name: 'sugar',
	location: 'pantry',
}
const egg = {
	name: 'egg',
	location: 'fridge',
}

const flourQuantity = {
	ingredient: flour,
	unitOfMeasure: 'cups',
	quantity: 2,
	notes: 'sifted',
}

const butterQuantity = {
	ingredient: butter,
	unitOfMeasure: 'sticks',
	quantity: 1,
	notes: 'softened',
}

const sugarQuantity = {
	ingredient: sugar,
	unitOfMeasure: 'cups',
	quantity: 1,
}
const eggQuantity = {
	ingredient: egg,
	unitOfMeasure: null,
	quantity: 2,
	notes: 'beaten',
}

//Recipe
const recipe = {
	name: 'Sugar Cookies',
	steps: [
		'cream the butter in a mixing bowl',
		'add the egg',
		'mix in the flour',
		'roll out the dough',
		'cut out cookie shapes',
		'bake on a greased sheet for 10 minutes at 350 degrees',
	],
	ingredients: [flourQuantity, sugarQuantity, eggQuantity, butterQuantity],
	servings: 20,
	author: 'Rachel',
	printIngredients: function () {
		this.ingredients.forEach((ele) => {
			console.log(
				`${ele.quantity} ${ele.unitOfMeasure} of ${ele.ingredient.name}`
			)
		})
	},
	reduceQuantity:function () {
			flourQuantity.quantity -= 2
			sugarQuantity.quantity -= 1
			eggQuantity.quantity -= 2
			butterQuantity.quantity -= 1
	},
	doRecipe: function () {
		if (
			flourQuantity.quantity >= 2 &&
			sugarQuantity.quantity >= 1 &&
			eggQuantity.quantity >= 2 &&
			butterQuantity.quantity >= 1
		) {
			console.log('you have enough ingredients to make the ' + recipe.name)
			this.steps.forEach((step) => {
				console.log(step)
				this.reduceQuantity();
			})
		
		} else {
			console.log(
				'Your low on some ingredients, you need a market run before you start!'
			)
		}
	},
}
recipe.printIngredients();
recipe.doRecipe();
recipe.doRecipe();
