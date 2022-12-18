const div = document.querySelector('div')

// const buttons = document.querySelectorAll('button')



let currentPlayer ='X'

div.addEventListener('click', (e)=>{
    if (e.target.matches('button')) {
        e.target.innerHTML = currentPlayer;
        e.target.disabled = true; 
        console.log('clicked ' + e.target.innerHTML);
    }
    currentPlayer = currentPlayer === 'O' ? 'X' : 'O';
})


// const clickedAndDisable = (e)=>{
//     if (e.target.closest('button')) {
//         console.log('clicked and disable');
//         e.target.disabled = true;
//     }
// }

// buttons.forEach(btn=>btn.addEventListener('click', clickedAndDisable))


// buttons.forEach((btn) =>
// 	btn.addEventListener('click', (e) => {
// 		if (e.target.closest('button')) {
// 			console.log('clicked and disable')
// 			e.target.disabled = true
// 		}
// 	})
// )