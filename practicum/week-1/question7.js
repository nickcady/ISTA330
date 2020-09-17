/*
Given an array of 2n numbers, group the numbers into n pairs of integer,
such that the sum of the minimum of each pair is the largest.

Example: 
input: [4, 3, 8, 0]
output: 4
       because we can make the following pairs: (4, 8) and (3, 0) and 
       min(4,8) + min(3,0) = 4
       whatever other pairs we choose the sum of the minimums will not exceed 4.
*/

var maxSumOfMins = function(input) {
    let sorted = sorting(input);
    let count = 0;
    for (let i = 0; i < sorted.length; i += 2) {
       count += sorted[i];
    }
    return count;
};

var sorting = function(input) {
    for (let i = 0; i < input.length; i++) {
       for (let j = 0; j < input.length; j++) {
           if (input[j] > input[j + 1]) {
              let tmp = input[j];
              input[j] = input[j + 1];
              input[j + 1] = tmp;
           }
       }
    }
    return input;
}