'use strict'

const { LinkedList } = require('./linked-list')
// first in first out just like waiting in line and your on queue for something
const Queue = function () {
  this._items = new LinkedList()
}

// isEmpty - check to see if there are any items in the queue.
Queue.prototype.isEmpty = function () {
  // will return true if the number of items is zero in our linkedList
  return this._items.length() === 0
}

// enqueue - add an item to the tail of a queue
Queue.prototype.enqueue = function (value) {
  // add the value to the end of our queue which is the right of our linkedList
  this._items.append(value)
  // return the queue to allow method chaining
  // ex. someQueue.enqueue('A').enqueue('B')
  return this
}

// dequeue - remove an item from the head of a queue and return it
Queue.prototype.dequeue = function () {
  // Remove the value from the top of our queue which is on the left/first element of the linked list
  return this._items.removeFirst()
}
module.exports = Queue
