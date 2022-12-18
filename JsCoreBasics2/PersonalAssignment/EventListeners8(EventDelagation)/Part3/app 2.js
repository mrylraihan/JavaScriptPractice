// this is locating the div that has all the buttons
const btnLst = document.querySelector('.btnList')

// this is function in on the whole div but only logs when the action triggering 
//the event is a Button, then it from that event gets the information of the 
//surrounding elements p and id 
function seeId(event) {
	if (event.target.tagName === 'BUTTON') {
        const li = event.target.closest('li')
        const p = li.querySelector('p')
		console.log(
			li.id,
            p.innerHTML
		)
	}
}

// this is adding the event to the div as a whole and whats in it 
btnLst.addEventListener('click', seeId)
