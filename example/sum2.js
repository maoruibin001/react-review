/**
 * Created by lenovo on 2017/11/17.
 */
const requires = require('requirejs')

let t = 0;
function getSumNum(arr, Sum) {
  let i, j;
  let n = arr.length;
  let ret = [];
  for (i = 0, j = n - 1; i < j;) {
    t+= 1;
    if (arr[i] + arr[j] == Sum) {
      ret.push([i, j]);
      i++;
    } else if (arr[i] + arr[j] < Sum)
      i++;
    else
      j--;
  }
  return ret;

}
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(getSumNum(arr, 7))
console.log(t);