const myForm = document.getElementById('myForm')

const getFormData=(e)=> {
    e.preventDefault()
    console.log(myForm);//this will log our form element 

    let jsonObject = {};// we are creating an empty object to store the values from our form 
    let formData = new FormData(myForm);//we pass in our form to create a FormData object
    console.log(formData, 'without stringify');
    // field[0] is the actual input name (key)
    // field[1] is the actual input field (value)
    for (let field of formData) {
        console.log(field[0]);//key
        console.log(field[1]);//value
        jsonObject[field[0]] = field[1];
    }
    
    console.log(formData.entries(), 'with.entries()'),// 'with.entries()'//{}
    console.log(JSON.stringify(formData));//{}
    console.log(JSON.stringify(jsonObject));//{"username":"Wayel","useracc":"4444","password":"ffffffff"}
}
myForm.addEventListener('submit',getFormData )


const stuff = 'stuff'
const table = 'table' 
// how to add properties to an empty object using array(square bracket) notation
let obj = {}//empty object
//the value of stuff will be our key and the value of table will be our value 
//creating our key value pair
obj[stuff]=table
console.log(obj);//{stuff: 'table'}