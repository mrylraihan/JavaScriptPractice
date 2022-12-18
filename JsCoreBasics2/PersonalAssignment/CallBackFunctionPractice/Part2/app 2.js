// function hello(b) {
//     console.log("hello "+ b);
// }

// function sayHello(a, b) {
//     a(b);
// }

// sayHello(hello, "mike");//hello mike


// const alerting= ()=> alert("hey u clicked me!")

// const btn = document.getElementById('btn')
// btn.addEventListener('click', function () {
//     alert('hey you clicked me!')
// })


// Write a function that takes an array and an element.The function should return true if the
// element exists in the array.Return false if the element does not exist in the array.
//     Example:
// array: ['a', "b', 'c', 'd', 'el
// element: 'd'
// Should return: true


// const array = ['a', 'b', 'c', 'd', 'e']

// const checkTheEle = (arr, target)=>{
//     let isthere = false
//     arr.forEach(ele => {
//         if (ele === target){
//             isthere = true
//         }
//     });
//     return isthere
// }

// console.log(checkTheEle(array, 'c'))


// function testingCallBackReturn(a) {
//     return a()
// }

// const test1 = testingCallBackReturn(()=>{
//     return 'hello'
// })

// console.log(test1);

const array = ['a', 'b', 'c', 'd', 'e']
const randomArray = (arr) => {
    const newOrder = []
    const rndOrder = []
    while (newOrder.length !== arr.length) {
        let rn = Math.floor(Math.random() * arr.length)
        if (newOrder.indexOf(rn) === -1) {
            newOrder.push(rn)
        }
    }
    newOrder.forEach((ele) => {
        rndOrder.push(arr[ele])
    })
    console.log(newOrder);
    return rndOrder
}

const test = randomArray(array)
console.log(test);