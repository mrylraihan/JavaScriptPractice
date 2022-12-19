function longestWord(sen){
 //creating ffiltered array
    const wordArr = sen.toLowerCase().match(/[a-z0-9]+/g);//this matches all words with numbers and letters and only counts those
// sort by length
const sorted = wordArr.sort((a,b)=>{return b.length - a.length});//creates a sorted list by comparing the length of each element 
// having the longest first to the smallest last
// const longestW = sorted[0];// sorting the first element which will be the longest
// return longestW;

//if multiple words, put into an array 
const longestWordArr = sorted.filter(function(word){
    return word.length === sorted[0].length;
});

//check if more than one array val
if (longestWordArr.length === 1) {
    //if its length is only one will return just the word
    return longestWordArr[0];
}else{
    return longestWordArr;
}

}

const sentence = 'Hello my name is Wayel Raihan Animal  h9y';//two words with the longest length

const lw = longestWord(sentence);

console.log(lw);//["raihan", "animal"]

const sentence2 = 'Hello im from Brooklyn!';// only one longest word

const lw2 = longestWord(sentence2);

console.log(lw2);