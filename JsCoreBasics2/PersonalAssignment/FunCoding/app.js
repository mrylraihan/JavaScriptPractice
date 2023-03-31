// target = 8
// [1,2,3,9] = No
// [1,2,4,4] = Yes
// get the 2 numbers that will sum to the target 
const list = [1, 2, 3, 9]
const list2 = [1, 2, 4, 4, 6]


const getTarget = (arr, target) => {
    let sum = 0
    let nums = []
    for (let i = 0; i < arr.length; i++) {
        if (sum == target) break;
        for (let j = 1; j < arr.length; j++) {
            sum = arr[i] + arr[j];
            if (sum == target) {
                nums.push(arr[i], arr[j])
                break;
            }

        }
    }
    return nums
}

// console.log(getTarget(list, 8))

const getTarget2 = (arr, target) => {
    let result = []
    arr.forEach(ele => {
        let remainder = target - ele;
        if (arr.includes(remainder) && result.length<1) {
            result.push(ele, remainder)
        }
    })
    return result[0] ? result :'sorry we didnt get anything' 
} 

console.log(getTarget2(list2, 8))


const checkingFunction = (a)=>{
    return a?a:'we didnt get anything'
}

// console.log(checkingFunction())
// console.log(checkingFunction('a'))

let arr = [1,2,3]
// console.log(arr.includes(1))