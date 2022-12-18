let name = "Wallie";
let hobbies;
if (name === "Wallie") {
  hobbies = ["coding", "cooking"];
  console.log(hobbies);
}

greet();//hoisting up functions, the fucntion is declared under and it still get hoisted to the top

function greet() {
  let age = 30;
  let name = "Wayel"; // this name variable is only avaiable in the scope of the function
  //this is due to the let, its a brand new variable seperate from the name variable
  //outside the scope, if it didnt have let it would chang eth evalue of the one outside
  // the scope
  console.log(name, age, hobbies);
}

console.log(name, hobbies);

// Hoisting

console.log(userName);//undefined

var userName = "loged";
// let userName = "loged"; these two will error while var doesnt
// const userName = "loged";
// with variables(const, let) js will hoist up the varaibles but wont initialize them 
// it does the same thing with var but it will hoist it and initialize it to undefined
// this is why we get undefined and not an error with var compared to const or let 
