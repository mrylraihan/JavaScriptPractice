// console.log('***********app.js************')
// const companies = ['Youtube', 'Facebook', 'Instagram', 'Netflix', 'Amazon']

// for (const n of companies) {
//     console.log(n)
// }

// const symbols = {
//     yt: 'YouTube',
// 	ig: 'Instagram',
// 	fb: 'Facebook',
// 	hr: 'Wallie Raihan',
// }
// for (const key in symbols) {
//     console.log('Key is: ' + key + ' Value is: ' + symbols[key])
// }



// const array1 = [1,2,3,4,5]
// let result = 0
// array1.forEach(num=> result+=num)

// console.log(result);//15

// let result2 = 0
// for (const num of array1) {
//     result2 += num;
// }
// console.log(result2);//15

// //using spread operator
// function sumArray(...a) {
//   let result3 = 0
//     for (const num of a) {
//      result3 += num
//     }
//     return result3
// }
// console.log(sumArray(1,2,3,4,5))//15

let n = 5;
let star = '*'
for (let index = 0; index < n-1; index++) {
    star+='*'
   console.log(star);
    
}
console.log('////////////');


const arr = ['a','2','3','4']

for (let index = 0; index < arr.length; index++) {
   console.log(arr[index]);
    
}

console.log('////////////');
for (const ele of arr) {
    console.log(ele);
}
console.log('////////////');
for (const key in arr) {
    console.log(arr[key]);
}

console.log('////////////');
// objects 

const person ={name:'wallie', age:30}

for (const key in person) {
    console.log(key , person[key]);
}

// for (const key of person) {
//     console.log(person[key]);
// }

let i = 0
while (i < 10) {
    console.log(i);
    i++;
}