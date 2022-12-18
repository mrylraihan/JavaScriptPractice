//practice mapping arrays 
//The map() method creates a new array populated with the results of calling a provided function on every 

//element in the calling array.
const array1 = [1, 4, 9, 16];

// pass a function to map
const map1 = array1.map(x => x * 2);

console.log(map1);
// expected output: Array [2, 8, 18, 32]

const mappedArray = array1.map((x) => ({index: x}));
console.log(mappedArray);


//another mapped Array 
const array2 = [1,2,3,4,5,6]
const map2Array = array2.map((e,y)=> y+':'+e);
console.log(map2Array);

//----------------------->

const existingArray2 = ['decode', 'dom', 'js'];
const newArray2 = existingArray2.map(function (value, idx, array){
    console.log(idx);// idx is the index
    console.log(array);// this points to the original array thats calling map().
    return idx+" "+ value +'! '+this.name;// changes each element in the array for the new array 
},{
    name:'wallie'// we added an object as a parameter to the map function 
});

console.log(newArray2);//(3) ['decode!', 'dom!', 'js!']
