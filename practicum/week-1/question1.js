/*
Given an array of numbers, return the running sum of the array. 
Running sum of a cell in the array is the sum of the cells up to that cell.
For example given the input array [5, 6, 1], the running sum is 
[5, 5+6, 5+6+1]
*/

var runningSum = function(input) {
   let returning = [];
   let past = 0;
   let i;
   for (i = 0; i < input.length; i++) {
      returning[i] = input[i] + past;
      past += input[i];
   }
   return returning;
};