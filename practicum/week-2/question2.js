
/*
Given an integer array, input, 
find the subarray
 which has the largest sum and return its sum.

Example: input: [-12,3,-1,5,-2,1,-7]
         output: 7
                 because [3,-1,5] has the largest sum.
          */

var largestSubarray = function(input) {
    let max = 0;
    let curr = 0;
    for (let i = 0; i < input.length; i++) {
        for (let j = i; j < input.length; j++) {
            curr += input[j];
            if (curr > max) {
                max = curr;
            }
        }
        curr = 0;
    }
    return max;
}

console.log(largestSubarray([-17,3,1,5,-9,-1,10]));