const subwayLines ={
    Red : ['South Station','Park Street','Kendall','Central','Harvard','Porter','Davis','Alewife'],
    Green :['Government Center','Park Street','Boylston','Arlington','Copley','Hynes','Kenmore'],
    Orange : ['North Station','Haymarket','Park Street','State','Downtown Crossing','Chinatown','Back Bay','Forest Hills']

}



// Only count stops on the Redline first 

const sameLineStops = (line, start, end)=>{
    //find the array index of the start station 
    const startIndex = subwayLines[line].indexOf(start)
    //find the array index of the end station 
    const endIndex = subwayLines[line].indexOf(end)
    //do a little bit of math to find the difference (distance)
   return Math.abs(startIndex - endIndex)// Math.abs returns the absolute value meaning
   //-2 absolute value is 2;

}
//find the first line and stop distance to Park street
// console.log(sameLineStops('Green','Copley', 'Park Street'));
// // //find the second line and stop distance from Park street
// console.log(sameLineStops('Red','Park Street', 'Alewife'));

const stopsBetweenStations = function(startLine, startStation, endLine,endStation){
// return early if theres only one line 
if (startLine === endLine) return sameLineStops(startLine, startStation, endStation)

//find startline station to park street 
const startStationToParkStreet = sameLineStops(startLine, startStation, "Park Street")
//find endline station from park street
const endStationToParkStreet = sameLineStops(endLine, "Park Street", endStation)

// then add them together 
return startStationToParkStreet + endStationToParkStreet

}

console.log(stopsBetweenStations('Red', 'Park Street', 'Red', 'Alewife'))























// const obj = {
//     key1: 1,
//     key2: 2
// }
// console.log(obj.key1);//1 :dot notation to get a value at a key
// console.log(obj["key1"]);//1: bracket notation for a variable value access in a object
// // or 
// const examp = 'key2'
// console.log(obj[examp]);//2

// function hello() {
//     console.log('Hello!');
// }
// hello()


export{
    // hello,
    
}
