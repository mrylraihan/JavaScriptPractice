// You may use for loops and/or array iteration methods to complete this
// diagnostic.

// Make sure to run `grunt test` early and often!!!

// Question 1
// Write a function that takes someones first name and last name
// and returns their full name. Don't forget the space between the
// first name and last name!
const fullName = function (firstName, lastName) {
	return `${firstName} ${lastName}`
}

// Question 2
// Write a function that takes in a number and returns true
// or false if the number is greater than 5.
const greaterThan = function (num) {
    return num > 5
}

// Question 3
// Write a function that takes an array of numbers
// and returns the sum of that set
// **Note:** This diagnostic is testing your knowledge of functions, **not** array
// iteration methods. Feel free to solve this problem with any type of loop.
const sum = function (numbers) {
    return result = numbers.reduce((p, c) => p+c, 0)
}
// Question 4
// Write a function that takes an array of numbers
// and returns the smallest number from that array.
const min = function (numbers) {
    let minNum = numbers[0]
    for (const num of numbers) {
        if (minNum>num) {
            minNum = num
        }
    }
    return minNum
}
// Question 5
// Write a function that takes an array and a string and returns an array of all
// the elements in the array which are NOT equal to that string.

// Example: stringRemover(['snap', 'crackle', 'pop'], 'snap') should return
// ['crackle', 'pop']
const stringRemover = function (strings, removalString) {
    strings.forEach(string => {
        if (string === removalString) {
            strings.pop(removalString)
        }
    });
    return strings;
}
