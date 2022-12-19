const myForm = document.getElementById('myForm')
const subBtn = document.getElementById('subBtn')

const getFormData = event =>{
    event.preventDefault()
    const formData = new FormData(myForm);
    console.log(formData.get('username') + ' - ' + formData.get('useracc') + " - " + formData.get('password'));
}

subBtn.addEventListener('click', getFormData)
