const fs = require('fs')

fs.writeFile('data/data.js', 'console.log("data")', (e)=>{
    if(e)console.log(e)
    console.log("Data Saved");
})