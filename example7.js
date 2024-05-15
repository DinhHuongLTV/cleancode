let matrix = [
  [1, 2], 
  [3, 4]
];

// for (let i = 0; i < matrix.length; i++) {
//   for (let j = 0; j < matrix[i].length; j++) {
//     console.log(matrix[i][j]);
//   }
// }

for (let rowIndex = 0; rowIndex < matrix.length; rowIndex++) {
  let row = matrix[rowIndex];
  for (let colIndex = 0; colIndex < row.length; colIndex++) {
    let element = row[colIndex];
    console.log(element);
  }
}