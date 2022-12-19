//Iterables Part1 
//Maps and Sets
//Sets 
//Store (nested) data of any kind of length 
//iterable, also some special set methods available
//order is Not guaranteed, duplicates are Not allowed, no index based access
//Maps
//Store key-value data of any kind and length, any key values are allowed
//iterable, also some special map methods available
//order is guaranteed, dups keys are not allowed but values are, key base access

//working with Sets

const ids = new Set([1,2,3]);// you pass in a iterable
console.log(ids);//Set(3) {1, 2, 3}
console.log(ids.has(1));//true // has tells you whether it contains something or not 
ids.add(2);//this wont error but you wont see a dup 2 because it already has a 2
console.log(ids);//Set(3) {1, 2, 3}

// ids.entries() returns an iterable so if you want to use it in a loop 

for(const entry of ids.entries()){
    console.log(entry);//what is logged is [1,1][2,2][3,3]
    console.log(entry[0]);//1,2,3
}//this returns the value twice 

ids.delete('hello')// if you try to delete something that isnt in the 
//set it will just get ignored 


//how to use sets with dups

const numlist = [1,2,2,3,4,5];
console.log(numlist);//(6) [1, 2, 2, 3, 4, 5] a dup of 2
const setNums = new Set(numlist);
console.log(setNums);//Set(5) {1, 2, 3, 4, 5} it removes the dup 2