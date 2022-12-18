// Buttons list
const buttons = document.querySelectorAll('button')
const startBtn = buttons[0];
const resetBtn = buttons[1];

// Squares
const boxes = document.querySelectorAll('.box')

count = 0

function whosTurn(count) {
    return count % 2 === 0  ? '🙅🏻‍♂️' : '🙆🏻‍♂️';
}

function changeSquareInput(sq) {
    if (sq.innerText === '') {
        sq.innerText = whosTurn(count);
        return ++count
    }else{
        sq.removeEventListener('click',changeSquareInput)
    }
}

function addEventsToSq() {
    boxes.forEach(box=>box.addEventListener('click', changeSquareInput.bind(this,box)))
}

startBtn.addEventListener('click', addEventsToSq);



// function logHI() {
//     console.log('on!');
// }

// onBtn.addEventListener('click', logHI)

// function removeEvent() {
//     onBtn.removeEventListener('click',logHI )
// }

// offBtn.addEventListener('click', removeEvent)