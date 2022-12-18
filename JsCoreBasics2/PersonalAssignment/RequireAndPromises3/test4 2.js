

function showMeAWord(printF, word) {
    printF(word)
}

const wordLogger = (word)=>{
    const promise = new Promise((resolve, reject)=>{
        showMeAWord(()=>{
            resolve(word)
        },word )
    });
    return promise
}

function testPromise() {
    wordLogger('testing').then(data=>{
        console.log(data += ' more words');
        return data;
    }).then(data =>console.log(data+ ' and again!'))
}

testPromise()
