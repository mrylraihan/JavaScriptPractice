'use strict'
// A Constructor to build a new graph
// our graphs will look like the following example of links on different webpages
// {
//  'stackoverflow.com':['github.com', 'youtube.com'],
//  'github.com':['bing.com', 'stackoverflow.com'],
//  'bing.com':[] // this is what a node should look like after initially being added
// }
const Graph = function () {
  // keep track of the nodes and the edges that the node is connected too
  // using an object
  this.nodes = {}
}
// node - ex 'bing.com'
// the same way we create a property for an object
// this.node.key = value
// or this.node[key] = value
Graph.prototype.addNode = function (node) {
  // if the object this.nodes does not have a property for the node, then we will add a new node
  if (!this.nodes[node]) {
    this.nodes[node] = []
  }
  // add a property for our new node, with an array of the nodes
  // it has a connection to
}

Graph.prototype.addEdge = function (node, edge) {
  if (!this.nodes[node]) {
    this.nodes[node] = [edge]
  } else {
    this.nodes[node].push(edge)
  }
}

module.exports = { Graph }
