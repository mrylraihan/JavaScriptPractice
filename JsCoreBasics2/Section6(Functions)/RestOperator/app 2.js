//Rest Operator
//the rest operator need to be the last parameter
// you can only have one rest peramter
const sumUp = (...numbers)=>{//this is the rest parameter
    let sum = 0;
    for (const num of numbers) {
        sum += num;
    }
    return sum;
};

console.log(sumUp(1,2,3,4,5));

//another way to use something similar to the rest parameter is the 
//arguments variable 
// const subtractUp = function(){
//     let sum = 0;
//     for (const num of arguments) {
//         sum -= num;
//     }
// }


//spread operator
let person = {age:30};

let yetAnotherPerson = {...person}; 


//function inside a function

const addingMore = (...numb)=>{
    let sum = 0;
//another function
    let addingOne = (a)=>{
        return a + 1;
    };

    for (let num of numb) {
      
        num = addingOne(num);
        sum+=num;
    } 
    return sum;
};

console.log(addingMore(1,2,3,4,5));


//functions inside other functions review

const sumUp2 = (a, b, ...numbers)=>{
    const validateNumber=(n)=>{
        return isNaN(n)? 0: n;
    };
    let sum = a+b;
    for(const num of numbers){
        sum += validateNumber(num);
    }
    return sum;
}

console.log(sumUp2(1,2,3,4,5));

// instead of using rest operator you can use arguments

const sumUp3 = function(){
let sum = 0;
for(const n of arguments){
    sum+=n;
}
return sum;
};

console.log(sumUp3(12,4,2));




function resultHandler(a){
    console.log(a);
}

const subtractUp2 = function(resultHandler, ...numb){
    let sum = 0;
    for (const num of numb) {
        sum-=num;
    }
    resultHandler(sum);
}

subtractUp2(resultHandler, 10,2)
