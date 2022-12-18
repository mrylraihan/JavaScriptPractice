//inserting elements between index's using the splice method
//The splice() method changes the contents of an array by removing or 
//replacing existing elements and/or adding new elements in place
//.splice(strt index(inclusive), elements you want to remove, what to replace with);

const hobbies = ['Cooking', 'Sports', 'Farming','Walking','Eating'];
hobbies.splice(2,1,'computers');
console.log(hobbies);//["Cooking", "Sports", "computers", "Walking", "Eating"]

//or you can use splice to add in the middle with out replacing 
//this is simply picking the index you want to start at, and by put 0 in the second parameter
//states you amount of elements you want to remove which is 0 
//the parameter you can add as many elements as you want
hobbies.splice(2,0,'intheMiddle');
console.log(hobbies);// ["Cooking", "Sports", "intheMiddle", "computers", "Walking", "Eating"]

hobbies.splice(1,0,'Running', 'Climbing');
console.log(hobbies);//(7) ["Cooking", "Running", "Climbing", "Sports", "intheMiddle", "computers", "Walking", "Eating"]

//if we want to remove specific elements 
//you wouldnt put in an element as the last parameter
// 

hobbies.splice(2,1);//this is saying start at index 2 which is "Climbing" and remove 1 element, 
console.log(hobbies);//(7) ["Cooking", "Running", "Sports", "intheMiddle", "computers", "Walking", "Eating"]


// hobbies.splice(0);//this will remove everything
// console.log(hobbies);//[]

//if you want to delete everything after a specific element you would only put in the 
//element you want to start deleting from 
// hobbies.splice(2)
// console.log(hobbies);//(2) ["Cooking", "Running"]

//with negative numbers it will start from the end of teh array and remove from there 

hobbies.splice(-1,1);//this will start at the end and move left 1 time removing 'Eating'
console.log(hobbies);//(6) ["Cooking", "Running", "Sports", "intheMiddle", "computers", "Walking"]


//Splice method is only available for real arrays this is an example of when you would want 
//to convert an iterable or array like object to an array with the Array.from() method