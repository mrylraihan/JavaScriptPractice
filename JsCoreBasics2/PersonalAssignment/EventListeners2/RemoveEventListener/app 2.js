const onBtn = document.getElementById('on');
const offBtn = document.getElementById('off');

function logHI() {
    console.log('on!');
}

onBtn.addEventListener('click', logHI)

function removeEvent() {
    onBtn.removeEventListener('click',logHI )
}

offBtn.addEventListener('click', removeEvent)