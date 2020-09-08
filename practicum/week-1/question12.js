/*
A string, input, which contains only letters a and b is given.
A list of substrings s1, s2, .., sn is called a partition for input if and only if
  input == s1 + s2 + ... + sn.

A substring is balanced if it has equal number of a's and b's.
The number of balanced substrings in a partition is called the balence number of the partition.
Among all the possible partitions of the input string, what is the maximum balance number?

Example:
input: 'abaabbabab'
output: 4 because the following partition has the highest number of balanced substrings:
          'ab', 'aabb', 'ab', 'ab'
*/

var maxBalanceNumber = function(input) {
  let max = 0;
  let check = [];
  let localMax = 0;
  for (let i = 0; i < input.length; i++) {
    if (input[i]  == 'a') {
      check.push('a');
    }
    if (input[i] == 'b' && input != []) {
      check.pop();
      localMax++;
      if (i == input.length - 1 || input[i + 1] == 'a') {
        if (localMax > max) {
          max = localMax;
        }
        localMax = 0;
        check = [];
      }
    }
  }
  return max * 2;
};

console.log(maxBalanceNumber('abaabbabab'))