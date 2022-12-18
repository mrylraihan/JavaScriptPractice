// this keyword points to the object that is referring to it, it literally steps out
// one of the scope it is in and so on and so forth
const object = {
  prop: this, // points to the window object 
  method: function(){return this;}// this keyword will return 
  //the object in which the method is located
};

const array = [
  this, //points to the window object
  function(){return this;}// this keyword will return 
  //the object in which the method is located which is this array 
];

//array[1]();