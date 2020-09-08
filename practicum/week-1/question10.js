/*
Given an integer n, return difference between the maximum and the minimum of its digits.

Example:
input: 472
output: 7 - 2 = 5
*/

var maxMinusMin = function(n) {
    let digits = [];
    for (let i = n; i > 0; i = Math.floor(i / 10)) {
        digits.push(i % 10);
    }
    let max = 0;
    let min = 9;
    for (let i = 0; i < digits.length; i++) {
        if (digits[i] < min) {
            min = digits[i];
        }
        if (digits[i] > max) {
            max = digits[i];
        }
    }
    return max - min;
};