console.log('***********app.js************')
const companies = ['Youtube', 'Facebook', 'Instagram', 'Netflix', 'Amazon']

for (const n of companies) {
    console.log(n)
}

const symbols = {
    yt: 'YouTube',
	ig: 'Instagram',
	fb: 'Facebook',
	hr: 'Wallie Raihan',
}
for (const key in symbols) {
    console.log('Key is: ' + key + ' Value is: ' + symbols[key])
}



const array1 = [1,2,3,4,5]
let result = 0
array1.forEach(num=> result+=num)

console.log(result);//15

let result2 = 0
for (const num of array1) {
    result2 += num;
}
console.log(result2);//15

//using spread operator
function sumArray(...a) {
  let result3 = 0
    for (const num of a) {
     result3 += num
    }
    return result3
}
console.log(sumArray(1,2,3,4,5))//15

