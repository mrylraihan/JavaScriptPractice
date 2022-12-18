const form = document.getElementById('form')

const getFormData = (e)=>{
    e.preventDefault()
    // FormData will gather all the data in the form and create a json object
    // taking the name on the input field as they key and value from the input 
    const formDataObj = new FormData(form)
    // converting in to a real js object 
    const keyValueObject = Object.fromEntries(formDataObj.entries())
    console.log(formDataObj);
    console.log(keyValueObject);
}

// GETTING DATA FROM FORM 1
form.addEventListener('submit', getFormData)

