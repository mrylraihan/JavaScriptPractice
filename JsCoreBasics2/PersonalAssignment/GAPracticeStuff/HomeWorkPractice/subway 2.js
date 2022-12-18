const RedLine = ['South Station', 'Park Street', 'Kendall', 'Central', 'Harvard', 'Porter', 'Davis', 'Alewife']
const GreenLine = ['Government Center', 'Park Street', 'Boylston', 'Arlington', 'Copley', 'Hynes', 'Kenmore']
const OrangeLine = ['North Station', 'Haymarket', 'Park Street', 'State', 'Downtown Crossing', 'Chinatown', 'Back Bay', 'Forest Hills']

const Subway = {
    'Red': RedLine,
    'Green': GreenLine,
    'Orange': OrangeLine
}

function distanceBetweenStops(Line, sStation, eStation){
    let sIdx = Subway[Line].indexOf(sStation)
    let eIdx = Subway[Line].indexOf(eStation)
    return Math.abs(sIdx-eIdx) 
}

function stopsBetweenStations(sLine, sStation, eLine, eStation){
    //Optional improvement on basic algorithm 1    
    //reduces from 2 function calls and some arithmatic to a single return statement
    if(sStation === eStation){
        return 0
    }
    //Optional improvement on basic algorithm 2
    //Same line only need to check distance between stops on same line
    //reduces from 2 function calls and some arithmatic to a single function call 
    else if(sLine === eLine){
        return distanceBetweenStops(sLine, sStation, eStation)
    }
    //Optional improvement on basic algorithm 3
    //reduces from 2 function calls and some arithmatic to a single function call
    else if (sStation === "Park Street" || eStation === "Park Street"){
        if(sStation === "Park Street"){
            return distanceBetweenStops(eLine, sStation, eStation)
        }
        else{
            return distanceBetweenStops(sLine, sStation, eStation)
        }
    }
    //Basic Algorithm
    else{
        return distanceBetweenStops(sLine, 'Park Street', sStation)  + distanceBetweenStops(eLine, 'Park Street', eStation)
    }
}



console.log(
stopsBetweenStations('Red', 'Alewife', 'Red', 'Alewife'), // 0
stopsBetweenStations('Red', 'Alewife', 'Red', 'South Station'), // 7
stopsBetweenStations('Red', 'South Station', 'Green', 'Kenmore'), // 6
stopsBetweenStations('Green', 'Government Center', 'Orange', 'Chinatown'), // 4
stopsBetweenStations('Orange', 'State', 'Green', 'Copley'), // 4
stopsBetweenStations('Green', 'Government Center', 'Red', 'South Station') // 2
)