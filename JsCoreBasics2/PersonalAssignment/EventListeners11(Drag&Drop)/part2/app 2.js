const draggableElement = document.getElementById('myDraggableElement')

draggableElement.addEventListener('dragstart', (e)=> {
    e.dataTransfer.setData('text/plain', draggableElement.id);
});

const dropZones = document.querySelectorAll('.drop-zone')

for(const dropZone of dropZones){
    //when a draggable element is over a zone
    dropZone.addEventListener('dragover', e=>{
        e.preventDefault();
        dropZone.classList.add('drop-zone--over')
    });

dropZone.addEventListener('dragleave', e =>{
    dropZone.classList.remove('drop-zone--over')
})

//when a draggable element is in a drop zone
    dropZone.addEventListener('drop', e=>{
        e.preventDefault();
        const dropElementId = e.dataTransfer.getData('text/plain');
        const dropElement = document.getElementById(dropElementId)
        dropZone.appendChild(dropElement)
        dropZone.classList.remove('drop-zone--over')
        console.log(e);

    })
}