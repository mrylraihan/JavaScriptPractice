
const Red = ['South Station','Kendall','Park Street','Central','Harvard','Porter','Davis','Alewife']
const Green = ['Government Center','Park Street','Boylston','Arlington','Copley','Hynes','Kenmore']
const Orange = ['North Station','Haymarket','Park Street','State','Downtown Crossing','Chinatown','Back Bay','Forest Hills']

function betweenInd(a, stop1, b, stop2) {
    let st3, st2, st;
    if (a === b) {
       st =a.indexOf(stop1)//4
       st2 =a.indexOf(stop2)//2
       st3 = st +st2
    }else{
        let firstParkStop = a.indexOf('Park Street');
        let SecondParkStop =b.indexOf('Park Street');
        let st = a.indexOf(stop1)
        let st2 = b.indexOf(stop2)
         st = firstParkStop - st;
         st2 = SecondParkStop - st2;
         st = Math.sign(st)=== -1 ? st*=-1 : st;
         st2 = Math.sign(st2) === -1 ? st2 *= -1 : st2;
         st3 = st +st2
        }
    const newSt3 = Math.sign(st3)===-1 ? st3*=-1 : st3 
     console.log(newSt3 + ' Stops away');
}
betweenInd(Orange, 'Back Bay', Red, 'Harvard')