//Data types and converting js to JSON
//Nothing but strings need to have ""
//https://jsonlint.com/

const num = 4;
// {
//     "num": 4
// }

const word = "words";
// {
//     "word":"words"
// }
const bool = true;
// {
//     "bool": true
// }
const array1 = [1,2,3,4,'hello'];
// {
// 	"array1": [1, 2, 3, 4, 4]
// }
const personObject = {
    name: 'mike',
    age: 24
};

// {
// 	"person": {
// 		"name": "moe",
// 		"age": 5,
// 		"toys": ["fire truck", "ball"]
// 	}

// }

let jsConvertTojson = JSON.stringify(personObject)//turns the js object  to json string
console.log(jsConvertTojson);//{"name":"mike","age":24} Json String
let jsonConvertTojs = JSON.parse(jsConvertTojson)//converts the json to a js format
console.log(jsonConvertTojs);//{name: 'mike', age: 24}
