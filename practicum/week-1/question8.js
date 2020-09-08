/*
Given an array of numbers, for each number in the array 
find out how many numbers in the array are both even and bigger than the number.

Example:
input: [23, 44, 12, 4]
output: [1, 0, 1, 2]
*/

var biggerAndEven = function(input) {
    let newArr = [];
    for (let i = 0; i < input.length; i++) {
        let count = 0;
        for (let j = 0; j < input.length; j++) {
            if (i == j) {
                continue;
            }
            if (input[i] < input[j] && input[j] % 2 == 0) {
                count++;
            }
        }
        newArr[i] = count;
    }
    return newArr;
};

console.log(biggerAndEven([23, 44, 12, 4]));