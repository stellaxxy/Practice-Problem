/*
getCapitalCount: given an array of words, return a count of how many start with capital letters, For

example: ['it','will','not','Be','long','Till','we','Are']
returns: 3
 */
function getCapitalCount(arrayOfWords){
    let counter = 0;

    arrayOfWords.map(value => {
        if(value[0] === value[0].toUpperCase()){
            counter++;
        }
    });

    return counter;
}