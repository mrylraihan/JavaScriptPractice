const startBtn = document.getElementById('startGame')
const resetBtn = document.getElementById('resetBtn')
const result = document.getElementById('result')
const boxes = document.querySelectorAll('.box')

//"o" = o tile		"" = empty		"x" = x tile
const winConfig = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[2, 4, 6],
]

//flag for to check when board is full
let complete = false

// counter when ever this function is Invoked count increases by 1
let count = 0

//returns X or O depending on the count if count is even or odd
const whosTurn = (count) => {
	return count % 2 === 0 ? '🙅🏻‍♂️' : '🙆🏻‍♂️'
}

//passes in a square param and adds the X or O in to the text content of the html
function changeXorO(e) {
	if (e.target.innerText === '' && complete === false) {
		e.target.textContent = whosTurn(count)
		checkWinner()
		return count++
	}
}

function resetBoard() {
	boxes.forEach((box) => {
		result.innerText = ''
		box.innerText = ''
		complete = false
		count = 0
	})
}

//returns empty string if there is no winner and returns "x" or "o" if there is a winner
function checkWinner() {
	if (count < 4) {
		return
	}
	for (let idx = 0; idx < boxes.length - 1; idx++) {
		if (
			boxes[winConfig[idx][0]].innerText ===
				boxes[winConfig[idx][1]].innerText &&
			boxes[winConfig[idx][1]].innerText ===
				boxes[winConfig[idx][2]].innerText &&
			boxes[winConfig[idx][0]].innerText != ''
		) {
			result.innerText = `${boxes[winConfig[idx][0]].innerText} is the winner`
			complete = true
			return
		}
	}
	if (count === 8) {
		complete = true
		result.innerText = 'Draw!'
	}
}

startBtn.addEventListener('click', (event) => {
	boxes.forEach((sq) => sq.addEventListener('click', changeXorO))
})

resetBtn.addEventListener('click', resetBoard)
