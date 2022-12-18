const array = ['cat', 'monkey', 'dog']

const newMap = new Map();
function turntoMap(a) {
    for (const ele in a) {
        newMap.set(ele, a[ele])
    }
    console.log(newMap);
    
    for (const key of newMap) {
      console.log(key);
    }

}

turntoMap(array);


arr = ['jam', 'beef', 'cream', 'jam']
arr.sort()
var count = 1
var results = {}
for (var i = 0; i < arr.length; i++) {
	if (arr[i] == arr[i + 1]) {
		count += 1
	} else {
		results[arr[i]] = count 
		count = 1
	}
}
console.log(results);



const paragraph = // eslint-disable-line no-unused-vars
	'When in the Course of human events it becomes necessary for one ' +
	'people to dissolve the political bands which have connected them ' +
	'with another and to assume among the powers of the earth the ' +
	'separate and equal station to which the Laws of Nature and of ' +
	'Natures God entitle them a decent respect to the opinions of ' +
	'mankind requires that they should declare the causes which impel ' +
	'them to the separation'


const words = paragraph.toUpperCase()

const normalizedWords = words.split(' ')

const wordFrequencies = {}

for (let i = 0; i < normalizedWords.length; i++) {

	const word = normalizedWords[i]
	if (wordFrequencies[word] === undefined) {
		wordFrequencies[word] = 1
	} else {
	
		wordFrequencies[word]++
	}
}

console.log(wordFrequencies)