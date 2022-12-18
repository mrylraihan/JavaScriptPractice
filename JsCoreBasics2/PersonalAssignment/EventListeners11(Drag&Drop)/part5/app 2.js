const fill = document.querySelector('.fill');
const empties = document.querySelectorAll('.empty')


//fill listeners
// the listener we want to add to start the dragging and drop implementation is the dragstart
fill.addEventListener('dragstart', dragStart)
fill.addEventListener('dragend', dragEnd)


//Drag Functions for target element
function dragStart() {
    console.log('start');
    this.className += ' hold'//how we add the hold class to the target element
    setTimeout(()=> this.className = 'invisible', 0)
    //this will remove the image from the square it was dragged from but still have the image on the cursor
}

function dragEnd() {
    console.log('end');
    this.className = 'fill'
    //this will add the class fill to where the dragend stops 
    //this will allows us to move image around and have the image return to the box
}


// Loop through empties and call drag Events on each of them
//this will allow us to be able to drop our content in these specific areas 

for (const empty of empties) {
    empty.addEventListener('dragover', dragOver);
    empty.addEventListener('dragenter', dragEnter);
    empty.addEventListener('dragleave', dragLeave);
    empty.addEventListener('drop', dragDrop);
}
//when its moving //or over a box
function dragOver(e) {
    e.preventDefault();
    console.log('over');
}
//when it enters a box
//we also want to preventDefault 
function dragEnter(e) {
    e.preventDefault()
    this.className += ' hovered'
    //this will add the hovered class when an element is entering a square
    console.log('enter');
}
//when it leaves a box
function dragLeave() {
    this.className = 'empty';
    //this will remove and replace the class of the square when the drag element leaves the square
    console.log('leave');
}

//for drop to work dragOver must preventDefault on the event
//drop is where the element will drop on the html
function dragDrop() {
    this.className = 'empty'
    //replace the class with empty just incase hover was added to it
    this.append(fill)
    //then we want to append the element to the square we dragged to with the listeners drop
    //it will also remove it from the previous location 
    console.log('drop');
}