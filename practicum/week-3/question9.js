/*
Given an array of integers A, 
a move consists of choosing any A[i], 
and incrementing it by 1.

Return the least number of moves to make every value in A unique.

Example:
input: [1,2,2]
output: 1
*/

var minMoves = function(A) {
    count = 0;
    A = sorting(A);
    for (let i = 0; i < A.length - 1; i++) {
        console.log(A);
        if (A[i] < A[i+1]) {
            continue;
        }
        if (A[i] >= A[i+1]) {
            A[i+1]++;
            count++;
            i--;
        }
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

console.log(minMoves([3,2,1,2,1,7]));