function isAnnagram(str1, str2){
       let word1 = str1.toLowerCase().split('').sort().join('');
       let word2 = str2.toLowerCase().split('').sort().join('');
       console.log(word1);
       console.log(word2);
       console.log(word1 === word2);
}

isAnnagram('wallie', 'WALLIE')//this will log true because before we split
// the string we are lowercasing it, the spliting then sorting
//aeillw
//aeillw
//true

function isAnnagram2(str1, str2){
    let sorted1 = str1.split('').sort().join('').toLowerCase();
    let sorted2 = str2.split('').sort().join('').toLowerCase();
    console.log(sorted1);
    console.log(sorted2);
    console.log(sorted1 === sorted2);
}

isAnnagram2('Name', 'AMNE');//this will log false because we split the string before lowercase
//it, and as we know Capital letters sort first, then it gets lowercase afterit has joinced again 


isAnnagram2('name', 'eman');//this will log true because it is already lowercased

//test

function isAnnagram3(string) {
    const stringArray = string.toLowerCase().split(',')
    const string1 = stringArray[0].split('').sort().join('')
    const string2 = stringArray[1].split('').sort().join('')
    console.log(string1);
    console.log(string2);
    console.log(string1 === string2)
}

isAnnagram3('Wayel , wayle')