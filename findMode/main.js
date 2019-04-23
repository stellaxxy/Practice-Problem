/*
findMode: Given an array of numbers, find the number that occurs the most often for example:

input [5,2,7,18,2,42,5,2]
returns 2, since it occurs 3 times. If 2 numbers occur the same amount, return the last one
 */

function findMode(inputArray){
    let inputObj = {};
    inputArray.map(value => {
        inputObj[value] = inputObj[value] ? inputObj[value] + 1 : 1;
    });

    let modeCount = 0;
    let mode = null;

    for(let value in inputObj){
        if(inputObj[value] > modeCount){
            modeCount = inputObj[value];
            mode = value;
        } else if(inputObj[value] = modeCount){
            if(inputArray.lastIndexOf(value) > inputArray.lastIndexOf(mode)){
                modeCount = inputObj[value];
                mode = value;
            }
        }
    }

    return mode;
}