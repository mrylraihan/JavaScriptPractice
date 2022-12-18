deviceName = []

function deviceNamesSystem(devicenames) {
	// Write your code here
	const map = new Map()
	for (let x = 0; x < devicenames.length; x++) {
		if (!map.has(devicenames[x])) {
			map.set(devicenames[x], 1)
		} else {
			map.set(devicenames[x], map.get(devicenames[x]) + 1)
			devicenames[x] = devicenames[x] + (map.get(devicenames[x]) - 1)
		}
	}
	return devicenames
}

function main() {
	const ws = fs.createWriteStream(process.env.OUTPUT_PATH)

	const devicenamesCount = parseInt(readLine().trim(), 10)

	let devicenames = []

	for (let i = 0; i < devicenamesCount; i++) {
		const devicenamesItem = readLine()
		devicenames.push(devicenamesItem)
	}

	const result = deviceNamesSystem(devicenames)

	ws.write(result.join('\n') + '\n')

	ws.end()
}


var info = {"name":"charles", "age":"20"}

console.log(info.name);

const p = document.querySelector('p.five')
p.addEventListener('click', ()=>console.log('clicked!'))