// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
matrix(4);
// [[1,   2,  3, 4],
// [12, 13, 14, 5],
// [11, 16, 15, 6],
// [10,  9,  8, 7]]

function matrix(n) {
  let arr = [];
  for (let i = 0; i < n; i++) {
    arr.push([]);
  }

  for (let i = 0; i < n; i++) {
    arr[i].push(i);
    for (let j = 0; j < n; j++) {
      arr[i].push[j + 4];
    }
    console.log(arr);
  }
}

module.exports = matrix;
