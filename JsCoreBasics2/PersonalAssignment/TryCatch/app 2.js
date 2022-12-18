const person = {name:'wallie', age:28}



// try {
    //     console.log(person.age/person2)
    // } catch (error) {
        //     console.log("sorry this doesn't make sense");
        // }
        
        
        //how to create a custom error
const wError = new Error('something went wrong Wallie!')

try {
    const ele = document.getElementById("btn")
    ele.forEach(element => {
       console.log(element); 
    });
} catch (e) {
    console.log(wError.message);
}

try{
    const ele = document.getElementById('btn')
    ele.forEach((element) => {
           console.log(element)
    })

}catch(e){
console.log('something went wrong again !');
console.dir(e);// gives you all the info regards to the error
}finally{
    console.log('im in finally!');
}

//prompter returns a value of what was typed in 
const user = prompt('what is your name')

console.log(user);