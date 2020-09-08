/*
An array is monotonic if it is 
either monotone increasing 
or monotone decreasing.

An array A is monotone increasing 
if for all i <= j, A[i] <= A[j].  
An array A is monotone decreasing 
if for all i <= j, A[i] >= A[j].

For a given array, input, 
return true if and only if the input array is monotonic.

Example: 
input: [12, 6, 2, 2, 2, 0]
output: true
*/

var isMonotonic = function(input) {
    let dir = true;
    if(input[0] < input[input.length - 1]) {
        dir = true;
    } 
    else {
        dir = false;
    }
    for(let i = 1; i < input.length; i++) {
        if(dir && input[i-1] > input[i]) {
            return false;
        }
        if(!dir && input[i - 1] < input[i]) {
            return false;
        }
    }    
    return true;
};