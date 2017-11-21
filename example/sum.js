/**
 * Created by lenovo on 2017/11/17.
 */
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const SUM = 8;

const tempObj = {};

for(let i = 0; i < arr.length; i ++) {
  tempObj[arr[i]] = i;
}

let ret = [];
let t = 0;

for (let i = 0; i < arr.length; i ++) {
  t += 1;
  let dValue = tempObj[SUM - arr[i]];
  if ((dValue || dValue === 0) && i !== dValue) {
    tempObj[arr[i]] = undefined;
    ret.push([i, tempObj[SUM - arr[i]]]);
  }
}
// console.log(ret);
// console.log(t);

// define([], function() {
//   var a = 20;
//   console.log(a);
// });

window.aa = 22;