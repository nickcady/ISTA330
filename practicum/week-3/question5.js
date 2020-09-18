/*
Given an array input of n integers
 where n > 1,  
 return an array output such that 
 output[i] is equal to the product of all the elements of input except input[i].

Example: 
input: [1,2,3,4]
output: [24,12,8,6]
*/

var productOfOthers = function(input) {
    let result =[];
    for (let i = 0; i < input.length; i++) {
        let curr = 1;
        for (let j = 0; j < input.length; j++) {
            if (i != j) {
                curr *= input[j];
            }
        }
        result[i] = curr;
    }
    return result;
};

console.log(productOfOthers([7,10,5]));

