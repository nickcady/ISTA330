/*
Given an array of size n, 
find the m-element. 
The m-element is 
the element that appears more than ⌊ n/2 ⌋ times.

If the m-element does not exist return -1.

Example: 
input: [1, 2, 2, 3, 2, 7, 2]
output: 2 
*/

var m_element = function(input) {
    let dict = {};
    for (let i = 0; i < input.length; i++) {
        if (!(input[i] in dict)) {
            dict[input[i]] = 0;
        }
        dict[input[i]] = dict[input[i]] + 1;
    }
    let number = 0;
    let max = 0; 
    for (var key in dict) {
        if (dict[key] > input.length/2) {
            return key;
        }
    }
    return -1;
};