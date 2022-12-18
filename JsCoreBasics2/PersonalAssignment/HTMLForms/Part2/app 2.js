const myForm = document.getElementById('myForm')

const getFormData = (e) => {
    e.preventDefault()
    console.log(e.target);
    const form = new FormData(e.target)
    // const name = document.getElementById('username');
    // form.append('name', name )
    // const data = JSON.stringify(form)

    // console.log(name.value);
    // console.log(data);
    console.log(form.values());
    for (const value of form.values()) {
        console.log(value);
    }
    console.log(form.get('username'));
   
}

myForm.addEventListener('submit', getFormData)
