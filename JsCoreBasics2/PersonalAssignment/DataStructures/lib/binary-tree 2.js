'use strict'
// All values must be unique
// All values need to be comparable

// This will create a binary search tree
// all values to left will be less then current value
// all values to the right will be greater then the current value
const BinaryTree = function () {
  this.root = undefined
}

// This allows us to create a new nodes for our binary tree
const Node = function (value) {
  // value is the data that the node keeps track of
  this.value = value

  // left will be a node whose value is less then the current nodes value
  this.left = undefined
  // right will be a node, whose value is greater that the current nodes value
  this.right = undefined
}

BinaryTree.prototype.includes = function (value) {
  // Safety Check to start off with
  if (!this.root) {
    // return false because we dont have any elements
    return false
  }
  // 1.Create a variable, currentNode, and assign it to the first node(the root) in the BinaryTree
  let currentNode = this.root

  // 2.While currentNode is not undefined, repeat steps 3 - 5.
  while (currentNode) {
    // 3.If the value we are searching for is less than the currentNode's value, then set the currentNode to its left node.
    if (value < currentNode.value) {
      // then set currentNode to its left node
      currentNode = currentNode.left
    } else if (value > currentNode.value) {
      // 4.Otherwise, if the value we are searching for is greater than the currentNode's value, then set the currentNode to its right node.
      currentNode = currentNode.right
    } else {
      // 5.Otherwise the value we are searching for is equal to the currentNode's value. So we found it.
      return true
    }
  }
  // 6.If currentNode becomes undefined, then the value does not exist in the tree.
  return false
}
BinaryTree.prototype.insert = function (value) {
  const insertedNode = new Node(value)
  // if our tree is empty (if we dont have a root)
  if (!this.root) {
    // set the root node to be the node we created
    this.root = insertedNode
    // this is so we can use function chaining like que
    // i want to end the function, so i return this
    return this
  }
  // 1. Create a variable, currentNode, and assign it to the first node(the root) in the BinaryTree
  let currentNode = this.root
  // 2. While currentNode is not undefined, repeat steps 3 - 5.
  while (currentNode) {
    // 3. If the value we are searching for is less than the currentNode's value, then set the currentNode to its left node.
    if (value < currentNode.value) {
      // and if currentNode has a node to the left
      if (currentNode.left) {
        // then set the currentNode to its left node
        currentNode = currentNode.left
      } else {
        currentNode.left = insertedNode
        return this
      }
    } else if (value > currentNode.value) {
      if (currentNode.right) {
        currentNode = currentNode.right
      } else {
        currentNode.right = insertedNode

        return this
      }
    }
  }
}

BinaryTree.prototype.insert2 = function (value) {
  const insertedNode = new Node(value)
  if (!this.root) {
    this.root = insertedNode
    // this is so we can use function chaining like que
    return this
  }
  // 1. Create a variable, currentNode, and assign it to the first node(the root) in the BinaryTree
  let currentNode = this.root
  // 2. While currentNode is not undefined, repeat steps 3 - 5.
  while (currentNode) {
    // 3. If the value we are searching for is less than the currentNode’s value, then set the currentNode to its left node.
    if (value < currentNode.value) {
      if (!currentNode.left) {
        currentNode.left = insertedNode
        return this
      } else {
        currentNode = currentNode.left
      }
    } else if (value > currentNode.value) {
      if (!currentNode.right) {
        currentNode.right = insertedNode
        return this
      } else {
        currentNode = currentNode.right
        // 5. Otherwise the value we are searching for is equal to the currentNode’s value. So we found it.
      }
    }
  }
}

BinaryTree.prototype.size = function () {

}

BinaryTree.prototype.height = function () {

}

BinaryTree.prototype.getMax = function () {

}

module.exports = {
  Node,
  BinaryTree
}
