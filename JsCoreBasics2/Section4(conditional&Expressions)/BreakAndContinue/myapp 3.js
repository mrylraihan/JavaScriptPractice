//break will stop the iteration from 8 and break the iteration completely 

for (let i = 0; i < 10 ; i++){
    if (i == 8){
        console.log('this is about to break');
        break;
    }
    console.log(i);

    
    };

    console.log('break practice');

    //continue skips the iteration it is on and move on to the next one
    // in this case it will skip 8 and move on to 9
for (let i = 0; i < 10; i++) {
    if (i == 8 ) {
        continue;
    }
    
    console.log(i);
}

console.log('basic continue statement');

for (let index = 0; index < 100; index++) {
    if (index % 2 == 0 ) {
        continue;
    }else if (index % 79 == 0 ) {
        break;
    }
    console.log(index);
}

console.log('quiz problem');

let sum = 0;
for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 2; j++) {
       sum = sum + i  + j;
    //    continue;
        
    }
    
}
console.log(sum);