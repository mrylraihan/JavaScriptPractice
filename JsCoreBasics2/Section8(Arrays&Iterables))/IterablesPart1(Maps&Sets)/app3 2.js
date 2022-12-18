//Sets 
//how to remove dups with out set 
function removeDups(arr){
    const result = [];
    arr.forEach(ele => {
        if (!result.includes(ele)) {
            result.push(ele);
        }
    });
    return result
}
const arr = [1,2,3,4,4,4];
console.log(removeDups(arr));//[1,2,3,4]

const rDup = a =>{
    const noDupArray = [];
    a.forEach(ele=>{
        if (!noDupArray.includes(ele)) {
            noDupArray.push(ele)
        }
    })
    return noDupArray;
}

const noDupArray = rDup(arr);
console.log(noDupArray);//[1,2,3,4]

//Now with set 
//All we do is 

const arrSet = new Set(arr);
console.log(arrSet);//Set(4) {1, 2, 3, 4}

//now what if we want to add the set 

arrSet.add(4);//because it already has 4 it will ignore it
arrSet.add(5);//because 5 isnt in there it will add it 
console.log(arrSet);//Set(5) {1, 2, 3, 4, 5}

//you can chain the add method 
arrSet.add(3).add(6).add(7);
//it will only add the numbers it doesnt have
console.log(arrSet);//Set(7) {1, 2, 3, 4, 5, 6, 7}
//we can also do the same with delete

// in sets we can access individual elements like we do in array 
//const arr = [1,2,3,4,4,4];
function removingDups(arr){ // function that removes dups
    const result = new Set(arr);
    //or  return Array.from(result); instead of the [...result]
    return [...result];
}

const spreadResults = removeDups(arr);
console.log(spreadResults);//(4)[(1, 2, 3, 4)]

//we can also do 

const anotherSet = new Set([1,2,3,4,5,5,5,5]);//only keeps teh unique values
const anotherArray = [...anotherSet];//converts the set to an array
console.log(anotherArray);//(5) [1, 2, 3, 4, 5]

//we can also create a function that tells us if an array only has unique
//values
// const uniqueValue = a => {
// 	const set = new Set(a)
// 	return set.size === a.length
// } or 
function uniqueValue(a){
    const set = new Set(a);
    return set.size === a.length;
}

console.log(uniqueValue(arr));//false


//how to iterate through a set 
const newSetts = new Set([1,2,6,4,5])
console.log(newSetts);
for (const entry of newSetts.entries()) {
    console.log(entry[0]);
}
