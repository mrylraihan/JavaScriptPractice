const { Graph } = require('./graph')
const webGraph = new Graph()

webGraph.addNode('Stackoverflow.com')
webGraph.addNode('github.com')
webGraph.addNode('google.com')

webGraph.addEdge('google.com', 'gamestop.com')
webGraph.addEdge('mozello.com', 'gamestop.com')

// const something = {}
// something.stuff1 = 'clothes'
// const stuff2 = 'stuff'
// something[stuff2] = 'pants'
console.log(webGraph)
// console.log(something)
