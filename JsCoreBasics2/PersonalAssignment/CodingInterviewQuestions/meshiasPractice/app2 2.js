const list = document.querySelectorAll('tr')

console.log(list);

for(let item of list){
    console.log(item.querySelectorAll('td')[1].innerHTML);
    let colorCell = item.style.backgroundColor
    console.log(colorCell);
}


// function solution(today, limit) {
//     // write your code in JavaScript (Node.js 8.9.4)
//     let wrongCount = 0
//     let rightCount = 0
//     let elem = document.getElementsByTagName('tr')
//     for (let item of elem) {
//         // let dateBorrowed = new Date(item.elem[1].innerHTML)
//         let dateBorrowed = new Date(item.querySelectorAll('td')[1].innerHTML)
//         // let dateReturned = item.elem[2].innerHTML
//         let dateReturned = item.querySelectorAll('td')[2].innerHTML
//         let colorCell = item.style.backgroundColor
//         if (dateReturned == '') {
//             if (today - dateBorrowed > limit) {
//                 if (colorCell == 'red') {
//                     rightCount = rightCount + 1
//                 }
//                 else {
//                     wrongCount = wrongCount + 1
//                 }
//             } else {
//                 if (colorCell != 'red') {
//                     rightCount = rightCount + 1
//                 }
//                 else {
//                     wrongCount = wrongCount + 1
//                 }
//             }
//         } else {
//             let dateRet = new Date(dateReturned)
//             if (dateRet - dateBorrowed > limit) {
//                 if (colorCell == 'red') {
//                     rightCount = rightCount + 1
//                 } else {
//                     wrongCount = wrongCount + 1
//                 }
//             } else {
//                 if (colorCell != 'red') {
//                     rightCount = rightCount + 1
//                 } else {
//                     wrongCount = wrongCount + 1
//                 }
//             }
//         }
//     }
//     return wrongCount;
// } (edited) 