const form = document.getElementById('form')
const nameInput = document.getElementById('name')
const addressInput = document.getElementById('address')

const getFormData = (e)=>{
    e.preventDefault()
    const ni = nameInput.value
    const ai = addressInput.value
    console.log({name:ni, address:ai});
    nameInput.value = ''
    addressInput.value = ''
}

// GETTING DATA FROM FORM 1
form.addEventListener('submit', getFormData)
