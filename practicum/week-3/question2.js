
/*
Given an array of integers, 1 ≤ input[i], 
some elements appear twice and others appear once.

Find all the elements that appear twice in this array.

Example: input: [19,3,2,10,8,2,3,5]
         output: [2,3]
                
          */

var findDuplicates = function(input) {
    let dups = [];
    let dict = {};
    for (let i = 0; i < input.length; i++) {
        if (!(input[i] in dict)) {
            dict[input[i]] = 0;
        }
        dict[input[i]] = dict[input[i]] + 1;
    }
    for (let key in dict) {
        if (dict[key] == 2) {
            dups.push(parseInt(key));
        }
    }
    return dups;
};