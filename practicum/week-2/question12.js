/*
The Fibonacci numbers, denoted as F(n) is a sequence such that 
each number is the sum of the two preceding ones. 
That is:
F(0) = 0,   F(1) = 1
F(n) = F(n - 1) + F(n - 2), for n > 1.

Given n, calculate F(n).
*/

var F = function(n) {
    if (n == 0) {
        return 0;
    }
    let prev = 0;
    let curr = 1; 
    for (let i = 1; i < n; i++) {
        let temp = curr + prev;
        prev = curr;
        curr = temp;
    }
    return curr;
};
console.log(F(9));