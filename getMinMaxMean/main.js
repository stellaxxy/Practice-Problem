/*
getMinMaxMean: given an array of numbers, get the minimum, maximum, and mean numbers. Return them as an object. Mean is another word for average For example:

input [3,1,9,12,4]
return: {min: 1, max: 12, mean: 25.8}
 */

function getMinMaxMean(numArray){
    const resultObj = {};

    const numberArray = bubbleSort(numArray);

    let sum = 0;
    numberArray.map(number => {
        sum = sum + number;
        return;
    });

    resultObj.min = numberArray[0];
    resultObj.max = numberArray[numberArray.length - 1];
    resultObj.mean = sum / numberArray.length;

    return resultObj;
}

function bubbleSort(numArray){
    const numberArray = numArray;
    for(let index = 0; index < numberArray.length - 1; index++){
        for(let innerIndex = 0; innerIndex < numberArray.length - 1; innerIndex++){
            if(numberArray[innerIndex] > numberArray[innerIndex + 1]){
                const temp = numberArray[innerIndex];
                numberArray[innerIndex] = numberArray[innerIndex + 1];
                numberArray[innerIndex + 1] = temp;
            }
        }
    }
    return numberArray;
}