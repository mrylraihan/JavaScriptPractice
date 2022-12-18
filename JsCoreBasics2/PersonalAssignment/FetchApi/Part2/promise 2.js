// what is a promise? - fetch
// how to keep your promise?
// async/await
// promise.all

// function setUp() {
// 	setTimeout(sayHello, 4000);
// }


// function sayHello(){
// 	console.log('hello!');
// }

// setUp()



// what is a promise? - fetch
// how to keep your promise?
// async/await
// promise.all

function setUp() {
	setTimePromise(1000)
	.then(()=>sayHello())
	.catch(err=>console.log(err))

	setTimePromise('word')
		.then(() => sayHello())
		.catch((err) => console.log(err))


}


function setTimePromise(time) {
	// setTimeout(sayHello, time)

	return new Promise((resolve, reject)=>{
		if(isNaN(time))reject(new Error('delay requires a number Value'));
		setTimeout(resolve, time);
	});
}


function sayHello(){
	console.log('hello!');
}

setUp()