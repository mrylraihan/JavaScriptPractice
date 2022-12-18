// The Red line has the following stops: South Station, Park Street, Kendall, Central, Harvard, Porter, Davis, Alewife
// The Green line has the following stops: Government Center, Park Street, Boylston, Arlington, Copley, Hynes, Kenmore
// The Orange line has the following stops: North Station, Haymarket, Park Street, State, Downtown Crossing, Chinatown, Back Bay, Forest Hills
// All 3 subway lines intersect at Park Street, but there are no other intersection points. Some of this MBTA is fictionalized.

// stopsBetweenStations('Red', 'Alewife', 'Red', 'Alewife') // 0
// stopsBetweenStations('Red', 'Alewife', 'Red', 'South Station') // 7
// stopsBetweenStations('Red', 'South Station', 'Green', 'Kenmore') // 6

const Red = ['South Station','Park Street','Kendall','Central','Harvard','Porter','Davis','Alewife']
const Green = ['Government Center','Park Street','Boylston','Arlington','Copley','Hynes','Kenmore']
const Orange = ['North Station','Haymarket','Park Street','State','Downtown Crossing','Chinatown','Back Bay','Forest Hills']

// stopsBetweenStations(Red, 'South Station', Orange, 'HayMarket') 

function stopsBetweenStations(line1, stop1, line2, stop2) {
	let totalStops;
    if (line1.includes(stop2)) {
		let sameLineStops = line1.indexOf(stop2) - line1.indexOf(stop1)
		if (Math.sign(sameLineStops) === -1) {
			sameLineStops *= -1
		}
        totalStops = sameLineStops;
		
	} else {
		//line1 at set stop to transferpoint then line2 at set stop to transfer point
        // console.log(line1.indexOf(stop1))
        // console.log(line1.indexOf('ParkStreet'))
		let beforeTransfer = line1.indexOf(stop1) + line1.indexOf('ParkStreet')
        // console.log(beforeTransfer);
		if (Math.sign(beforeTransfer) === -1) {
			beforeTransfer *= -1
            // console.log(beforeTransfer);
		}
        let line2stop = 0;
        if (line2.indexOf(stop2)=== 1) {
            line2stop = line2.indexOf(stop2) - 1
        }else if (line2.indexOf(stop2)=== 0) {
            line2stop = line2.indexOf(stop2) + 3
        }
        let afterTransfer = line2.indexOf('ParkStreet') + line2stop
		if (Math.sign(afterTransfer) === -1) {
			afterTransfer *= -1
		}
        totalStops = beforeTransfer + afterTransfer;
	}
    console.log(`${stop1} is ${totalStops} away from ${stop2}`);
}

stopsBetweenStations(Red, 'Harvard', Orange, 'Government Center') 
