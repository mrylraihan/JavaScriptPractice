const fs = require('fs')

fs.readFile('data/calc.js', 'utf8', (e,data)=>{
    if(e)console.log(e)
    console.log(data);
})