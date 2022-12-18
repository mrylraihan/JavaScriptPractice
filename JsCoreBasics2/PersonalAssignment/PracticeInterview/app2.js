const userInput = process.argv[2];

// console.log(userInput)

const promiseResult = (input)=>{
    return new Promise((res, rej)=>{
        if(!input){
            rej('please enter a name')
        }else{
            res('nice to meet you '+ input)
        }
    })
}


promiseResult(userInput)
.then(console.log)
.catch(console.log)