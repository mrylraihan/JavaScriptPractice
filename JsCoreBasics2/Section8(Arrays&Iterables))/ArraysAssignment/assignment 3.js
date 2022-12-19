//Task1
//part1
const array1 = [1,2,3,4,5,6,7];
const filteredArray = array1.filter(n => n > 5);
console.log(filteredArray);

//part2
const mappedNumber =  array1.map(val => ({num: val}));
console.log(mappedNumber);
//part3
const sum = array1.reduce((prV, curV) => {
	return prV * curV
}, 1)
console.log(sum);

//Task2
function findMax(...nums){
   let curMax = 0;
   for (const num of nums) {
       if (num> curMax) {
           curMax = num;
       }
   }
   return curMax;
}

console.log(findMax(...array1));

//Task3

function findMaxAndMin(...nums) {
	let curMax = nums[0]
    let curMin = nums[0]
	for (const num of nums) {
		if (num > curMax) {
			curMax = num
		}
        if (curMin>num) {
            curMin = num;
        }
	}
	return [curMax, curMin]
}

const [max, min] = findMaxAndMin(...array1);
console.log(min, max);

//Task4

const array2 = [2,3,3,4,4,5];
const newSet = new Set(array2);
console.log(newSet);