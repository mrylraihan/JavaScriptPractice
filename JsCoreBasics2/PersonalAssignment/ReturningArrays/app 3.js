function returnArray(a,b) {
    return [a,b];// returns an array 
}

const returnedArrayed = returnArray(1,2)
console.log(returnedArrayed);

//now if we want to destructure the array 

const [a, b] = [...returnedArrayed]
console.log(a);
console.log(b);