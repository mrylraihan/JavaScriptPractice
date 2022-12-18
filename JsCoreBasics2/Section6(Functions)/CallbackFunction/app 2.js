//callback function
//is a function that is called for you by something else
//example (function) with out () function1()== you are calling it
//  something(function1) something else is calling this function
h1.addEventListener("click", () => alert("hey"));

// you can tell if it is a callback function because the function call wont have the ()
//its usually stand alone
//the difference between function with () and with out is
//with () means u are calling it now 
//with out mean something else is going to call it = callback function

const sumUp = (resultHandler, ...numbers) => {
  let sum = 0;
  for (const num of numbers) {
    sum += num;
  }
  resultHandler(sum);
};


function showResult(result){
    console.log(`the result after adding all numbers `+ result);
}


sumUp(showResult, 1,2,3,4,5);



function sayName(name){
console.log(`hey my name is ${name}`);
}

function practiceCB(cbFunc, name){
    cbFunc(name);
}


practiceCB(sayName, 'Wallie');