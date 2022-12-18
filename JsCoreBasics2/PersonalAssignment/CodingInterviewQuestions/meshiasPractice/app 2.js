
const array1 = [1, 3, 6, 4, 1, 3, -5]

const solution = (a) => {
    let b = a.sort((a, b) => a - b)

    console.log(b);
}

solution(array1)
// with Sets
const solution1 = (a) => {
    let b = Array.from(new Set(a))
    let lastIdx = b[b.length - 1]
    let missingArr = []

    for (let idx = b[0]; idx < lastIdx; idx++) {
        if (!b.includes(idx)) {
            missingArr.push(idx)
            // console.log(missingArr);
        }
    }
    let finalNum = 1
    let postiveArr = []
    missingArr.forEach(ele => {
        if (ele > 0) {
            postiveArr.push(ele)
        }
    })

    let answer = postiveArr[0] ? postiveArr[0] : finalNum;

    return (answer);
}

console.log(solution1(array1))
console.log(solution1([1,2,0]))