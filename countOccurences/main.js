/*

countOccurences:

given an array of words and a separate word, count how many times a particular word given occurs within that array for example:
input ['dog','cat','dog','pig','canary','cat','dog'], 'dog'
returns 3

 */

function countOccurences(array, word) {
    let count = 0;
    for(let index = 0; index < array.length; index++){
        if(array[index] === word) {
            count++;
        }
    }
    return count;
}

