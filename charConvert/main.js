/*
Given the following function call:

character_convert('the cat in the hat');
And the resulting output:

"11610410132999711632105110321161041013210497116";
Create a function definition that achieves the output with the given input.

hint
Optimization: How would you speed up the processing if you already encountered a value?
 */

function character_convert(string){
    let result = '';
    for(let index = 0; index < string.length; index++){
        const asciiValue = string.charCodeAt(index);
        result += asciiValue
    }
    return result;
}