//all ps with draggable = true
const draggables = document.querySelectorAll('.draggable');
//all divs with container class
const containers = document.querySelectorAll('.container')

// Draggable elements
//adding the event listeners to all the elements(p-tags) that have draggable = true
draggables.forEach(draggable => {
    draggable.addEventListener('dragstart', ()=>{
        draggable.classList.add('dragging')//they dop the same thing 
        // draggable.classList += ' dragging'
        console.log('drag start');
    })
    draggable.addEventListener('dragend', ()=>{
		draggable.classList.remove('dragging')//they dop the same thing
		// draggable.classList = 'draggable'
		console.log('drag end')
	})
})


// DropZones for elements
//adding the event listeners to all the elements(divs) that we want to drop our 
//element 

containers.forEach((container) => {
	container.addEventListener('dragover', (e) => {
		e.preventDefault()
        const afterElement = getDragAfterElement(container, e.clientY)
        console.log(afterElement);
		const draggable = document.querySelector('.dragging')
        if (afterElement == null) {
            container.appendChild(draggable)
        }else{
            container.insertBefore(draggable, afterElement)
        }
		console.log('drag over')
	})
})

function getDragAfterElement(container, y) {
const draggableElements =  [...container.querySelectorAll('.draggable:not(.dragging)')]
    // container.querySelectorAll('draggable:not(.dragging)')//this will get every 
    //element that does'nt have the className dragging 
    //now we want to convert this to an array so we can do array operations on it 
return draggableElements.reduce((closest, child)=>{
const box = child.getBoundingClientRect();
const offset = y - box.top - box.height / 2 
if (offset < 0 && offset > closest.offset) {
    return {offset: offset, element: child}
}else{
    return closest
    }
}, {offset: Number.NEGATIVE_INFINITY}).element
}
