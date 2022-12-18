const buttonList1 = document.querySelector('.firstListBtn')
const btnList = buttonList1.querySelectorAll('button')

const sayHi = ()=>console.log('say HI!');

const addEvents = ()=>{
    btnList.forEach((box) => {
			if (box != btnList[0] && box != btnList[3]) {
				box.addEventListener('click', sayHi)
			}
		})
}

const removeEvents = () => {
	btnList.forEach((box) => {
		if (box != btnList[0] && box != btnList[3]) {
			box.removeEventListener('click', sayHi)
		}
	})
}


btnList[0].addEventListener('click', addEvents)

btnList[3].addEventListener('click', removeEvents)

// second list of buttons 
const buttonList2 = document.querySelector('.secondListBtn')
const btnList2 = buttonList2.querySelectorAll('button')

const person = {
    name: 'Wallie'
}


const personSayHi = (a)=>{
    console.log(a.name);
}

const bindedFn = personSayHi.bind(this,person)

const addEvents2 = ()=>{
    btnList2.forEach((box) => {
			if (box != btnList2[0] && box != btnList2[3]) {
				box.addEventListener('click', bindedFn)
			}
		})
}


const removeEvents2 = () => {
	btnList2.forEach((box) => {
		if (box != btnList2[0] && box != btnList2[3]) {
			box.removeEventListener('click', bindedFn)
		}
	})
}

btnList2[0].addEventListener('click', addEvents2)
btnList2[3].addEventListener('click', removeEvents2)


// third list of buttons 
const buttonList3 = document.querySelector('.thirdListBtn')
const btnList3 = buttonList3.querySelectorAll('button')




const sayHii = (event)=>{
	console.log('say hi');
    console.log(event);
	event.target.disabled = true
}


const addEvents3 = ()=>{
    btnList3.forEach((box) => {
			if (box != btnList3[0]) {
				box.addEventListener('click', sayHii)
			}
		})
}


btnList3[0].addEventListener('click', addEvents3)
