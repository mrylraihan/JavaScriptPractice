//this refresher
const test = { name: 'test' }
test.regular = function () {
	console.log(this.name)
}

test.arrow = () => {
	console.log(this.name)
}

test.regular() //test
test.arrow() //nothing

const test2 = {
	name: 'test2',
	regular: function () {
		console.log(this.name)
	},
	arrow: () => {
		console.log(this.name)
	},
}





//In a constructor 
function cb() {
	console.log('cb', this)
}
const cbArrow = () => console.log('cdArrow', this)

function cbcb(c){
      c();
}

const cbcbArrow = c => c();

test2.regular() //test2
test2.arrow()
// this works because in constructors it automatically binds to the object, only in constructors you can use the arrow function and it knows this
function Test(n) {
	this.name = n
	this.arrowTest = () => console.log(this.name)
	this.regularTest = function () {
		console.log(this.name)
	}
	cb()
	cbArrow()
	// cbcbArrow(function () {
	// 	console.log('cbcbArrow', this)//both point to window
	// })
	// cbcb(function () {
	//   console.log('cbcb', this);//point to window
	// })
	cbcb(() => console.log('cbcb', this)) //cbcb Test {name: 'test3', arrowTest: ƒ, regularTest: ƒ}
	cbcbArrow(() => console.log('cbcbArrow', this)) //cbcbArrow Test {name: 'test3', arrowTest: ƒ, regularTest: ƒ}
}

const test3 = new Test('test3')
test3.regularTest()
test3.arrowTest()
