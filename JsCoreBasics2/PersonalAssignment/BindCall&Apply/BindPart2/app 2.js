const details = (name, age)=> {
    console.log(`hey im ${name} and im ${age}`);
}

//this will allow use to bypass binding it to an object
//and by passing in the first parameter (name)and not the second when this is call and we pass
 //in another param it will be concatenated as the second argument
const callDeets = details.bind(this, 'Wallie')

//the param we pass in will be the second param = age 
callDeets(30)//hey im Wallie and im 30
