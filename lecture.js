/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- The solution must be available for the tutors by the end of the day (5PM CET)
- You can Google / use StackOverflow BUT only when you think you need something we didn't cover during lessons yet
- You can test your code in a separate file or de-commenting the single exercises in this one.
You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
*/

/* EXERCISE 
Write the code to revert an array.
es:
[1, 3, 5] ==> [5, 3, 1]
*///expected: [5,3,1]
console.log(`\n <=== REVERSE ===>`) 

const myArray = [1, 3, 5, 4, 6, 7, 8, 12, 30, 21]

function reverseIt(array) {
    array.reverse()
    console.log(array) 
}
reverseIt(myArray) //expected: [5,3,1]

/* WRITE YOUR CODE HERE */


/* EXERCISE 
Write the code to get only even numerical values in an array.
*/
console.log(`\n <=== Even ===>`) 
function evenNum(array) {
    console.log(array.filter(num => num%2 == 0))
}
evenNum(myArray)
/* WRITE YOUR CODE HERE */

/* EXERCISE 
Write the code to delete even entries from an array.
*/
console.log(`\n <=== delete even ===>`) 

function delEven(array) {
    console.log(array.filter(num => num%2 != 0))
    
}
delEven(myArray)
/* WRITE YOUR CODE HERE */

/* EXERCISE 
Write the code to remove all the vowels from a string.
*/
let stringArr = ["cat", "dog", "pinaple", "banana"]

console.log(`\n <=== Remove all the vowels ===>`) 

function remV(string) {
    console.log(string.replace(/[aeiou]/gi, ''))
}
remV("Some String with Vowels")
/* EXERCISE 
Write the code to check if there is any vowel in a string.
*/
console.log(`\n <=== vowel in a string. ===>`) 

function checkV(string) {
    console.log(string.match(/[aeiou]/gi).join(''))
}

checkV("Some String with Vowels")

/* WRITE YOUR CODE HERE */

/* EXERCISE 
Write the code to increase all the numeric values in a array by 1.
*/
console.log(`\n <=== increase all the numeric values ===>`) 

function incrN(array) {
    console.log("Before Increase: " + array)
    console.log(array.map(num => num +1))
}

incrN(myArray)
/* EXERCISE 
Replace all the strings in an array with their length.
es.: ["strive", "is", "great"] => [6, 2, 5]
*/
console.log(`\n <=== Replace all the strings ===>`) 

function repStr(array) {
    console.log(array)
    console.log(array.map(num => num.replace(num, num.length)))
}
repStr(stringArr)


// WAIT, we'll use reduce together for these one:

/* EXERCISE 
Write the code to get the maximum value in an array.
*/
console.log(`\n <=== Maximum value ===>`) 


function maxV(array) {
    let max = array.reduce((acc, cur) => acc > cur ? acc : cur)
    console.log(max)
}
maxV(myArray)
/* EXERCISE 
Write the code to get the minimum value in an array.
*/
console.log(`\n <=== minimum value ===>`) 

function minVal(array) {
    let min = array.reduce((acc, cur) => acc < cur ? acc : cur)
    console.log(min)
}

minVal(myArray)