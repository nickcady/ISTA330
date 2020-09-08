/*
Given a matrix M, return the transpose of M.

The transpose of a matrix is a 
new matrix whose rows are the columns 
of the original.

Example: 
input: [[1,2,3],[4,5,6]]
output: [[1,4], [2,5], [3,6]]

*/

var transpose = function(M) {
  let rows = M.length;
  let cols = M[0].length;
  let newMat = [];
  for (let j = 0; j < cols; j++) {
    newMat[j] = Array(rows);
  }
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
        newMat[j][i] = M[i][j];
    }
  }
  return newMat;
};