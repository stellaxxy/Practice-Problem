/*
correctCalcChecker: Given an array of objects with math equations, return all objects that have correct equations for

example: [ { num1: 3, num2: 3, op: '/', result: 3}, { num1: 12, num2: 4, op: '-', result: 8}, { num1: 2, num2: 3, op: '+', result: 5}, { num1: -5, num2: -2, op: '*', result: 10} ]
returns [ { num1: 12, num2: 4, op: '-', result: 8}, { num1: 2, num2: 3, op: '+', result: 5} ]
 */

function correctCalcChecker(mathArray){
    const correctArray = mathArray.filter(obj => {
        const mathResult = doMath(obj.num1, obj.num2, obj.op);
        return mathResult === obj.result;
    });

    return correctArray;
}

function doMath(num1, num2, operator){
    const operatorHandler = {
        '+': ()=>num1+num2,
        '-': ()=>num1-num2,
        '*': ()=>num1*num2,
        '/': ()=>num1/num2
    };
    const result = operatorHandler[operator]();
    return result;
}