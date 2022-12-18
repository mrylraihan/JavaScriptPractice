const { LinkedList } = require('./linked-list')

const groceryList = new LinkedList()

console.log('a new grocery list is', groceryList)
// new grocery list is LinkedList { head: undefined, tail: undefined }
groceryList.prepend('Apple')

console.log('a grocery list with a apple', groceryList)
//  grocery list with a apple LinkedList {
//   head: Node { value: 'Apple', next: undefined },
//   tail: Node { value: 'Apple', next: undefined }
// }

// because its a prepend the donut will come first, mean it will be the new head
groceryList.prepend('Donut')

console.log('a grocery list with a donut', groceryList)
// a grocery list with a donut LinkedList {
//   head: Node {
//     value: 'Donut',
//     next: Node { value: 'Apple', next: undefined }
//   },
//   tail: Node { value: 'Apple', next: undefined }
// }

// we can also append but that will add to the tail

// will remove the first node and set it to the next node
groceryList.removeFirst()

console.log(groceryList)
// // LinkedList {
// //   head: Node { value: 'Apple', next: undefined },
// //   tail: Node { value: 'Apple', next: undefined }
// // }

groceryList.removeFirst()
// // remove the first node which is the last node
console.log(groceryList)
// LinkedList { head: undefined, tail: undefined }

console.log(groceryList.length())
// console.log(groceryList.length2(), ' with recursion');

// console.log(groceryList.last2(), ' with recursion');
// console.log(groceryList.last());
// console.log(groceryList);

groceryList.append('Cookie')
groceryList.append('Sandwich')

console.log('print our groceries')
groceryList.print()

// console.log(groceryList.length2());

// // using includes
console.log('does our grocery list include a Cookie!')
// console.log(groceryList.includes('Cookie'));
console.log(groceryList.insertAfter('Sandwich', 'Cake'))
groceryList.print()
