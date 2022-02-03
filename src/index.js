
// You should implement your task here.

module.exports = function towelSort(matrix) {
  if (matrix === undefined) return []
  if (matrix.length === 0) return []
  let res = [];
  let arr = [];
  matrix.forEach((value, index) => {
    (index % 2 == 0) ? res.push(value) : res.push(value.reverse());
  })
  arr = res.reduce((a, b) => {
    return a.concat(b)
  });
  if (arr.length == 0) return []
  return arr;
}
