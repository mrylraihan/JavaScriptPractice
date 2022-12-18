'use strict'

// Import the linked list we created previously
const { LinkedList } = require('./linked-list')

// Create a Stack constructor to make new stacks
const Stack = function () {
  // we will keep tract of teh items in our stack  using a linkedList
  // the underscore infront of items means that items 'private'
  // private means the end user should not touch the items linkedList
  // or they might break that stack
  // that how the show private variables in js
  this._items = new LinkedList()
}
// isEmpty -check to see if there are any items on a stack.
Stack.prototype.isEmpty = function () {
  // will return true if the number of items is zero in our linkedList
  return this._items.length() === 0
}
// push - add an item onto the top of a stack
Stack.prototype.push = function (value) {
  // add teh value to the top of our stack which is the left of our linkedList
  this._items.prepend(value)
  // return the stack to allow method chaining
  // ex. someStack.push('A').push('B')
  return this
}
// pop - remove an item from the top of the stack and return it
Stack.prototype.pop = function () {
  // Remove the value from the top of our stack which is on the left/first element of the linked list
  return this._items.removeFirst()
}

module.exports = Stack
