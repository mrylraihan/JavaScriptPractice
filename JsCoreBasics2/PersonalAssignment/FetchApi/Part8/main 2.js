async function* asyncGenerator() {
	let i = 0;
	while (i < 100) {
		yield i++;
	}
}

const count = async () => {
	for await (const num of asyncGenerator()) {
		if(num==99)
		console.log(num);
	}
};

count()

console.log('hi');