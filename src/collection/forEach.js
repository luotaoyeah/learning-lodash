const _ = require("lodash");

const array = [1, 2, 3, 4, 5];

/*
 * 传递给回调函数 3 个参数：'当前元素'，'当前索引'，'数组本身'
 */
_.forEach(array, (value, index, collection) => {
  console.log("value:", value);
  console.log("index:", index);
  console.log("collection:", collection);
});

/*
 * 在回调函数中 return false，会终止迭代
 */
/* 1, 2 */
_.forEach(array, item => {
  if (item === 3) {
    return false;
  }
  console.log(item);
});

console.log("--------------------------------");

/*
 * 在回调函数中 return，会终止本次迭代，继续下一次迭代
 */
/* 1, 2, 4, 5 */
_.forEach(array, item => {
  if (item === 3) {
    return;
  }

  console.log(item);
});
