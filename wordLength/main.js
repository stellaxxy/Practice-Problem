/*
wordLengths:

given an array of words, return an array of numbers representing the length of each word For example:
input ['canary','silly','dog','a','mellow'])
return [6,5,3,1,6]
 */

function wordLength(inputArray){
    const lengthArray = inputArray.map(word => {
        return word.length;
    })
    return lengthArray;
}