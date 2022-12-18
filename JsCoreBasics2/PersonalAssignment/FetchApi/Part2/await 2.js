function setUp() {
    delayES8(1000)
    .then(()=>console.log('hello'))
    .catch(error=>console.log(error))
}

async function delayES8(time) {
    await delay(time);
    return;
}
function delay(time) {
    setTimeout(sayHello, time);
}

function sayHello() {
	console.log('hello!')
}
setUp()