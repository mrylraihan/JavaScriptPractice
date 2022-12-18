

const firstH1 = document.getElementById('firstH1')
const secondH1 = document.getElementById('secondH1')

function draggingElements(e) {
    e.dataTransfer.setData('text/plain', this.id)
    console.log(this);
    console.log(e);
};


firstH1.addEventListener('dragstart', draggingElements)
secondH1.addEventListener('dragstart', draggingElements)


const divs = document.querySelectorAll('.dropZone')


for (const div of divs) {
	//when a draggable element is over a zone
	div.addEventListener('dragover', (e) => {
		e.preventDefault()
        div.classList.add('drag-over')
        console.log(e);
	})

	div.addEventListener('dragleave', (e) => {
        console.log(e);
        div.classList.remove('drag-over')
	})

	//when a draggable element is in a drop zone
	div.addEventListener('drop', (e) => {
		e.preventDefault()
		const dropElementId = e.dataTransfer.getData('text/plain')
		const dropElement = document.getElementById(dropElementId)
		div.appendChild(dropElement)
        div.classList.remove('drag-over')
		console.log(e)
	})
}