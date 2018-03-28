const _ = require("lodash");

/*
 * 传递给回调函数 3 个参数：'当前元素'，'当前索引'，'列表'；
 * --------------------------------------------------
 */
const array01 = [1, 2, 3, 4, 5];
const result = _.forEach(array01, (value, index, collection) => {
  console.log("value:", value);
  console.log("index:", index);
  console.log("collection:", collection);
});
console.log("----------");

/*
 * 返回结果是该数组；
 * --------------------------------------------------
 */
console.log("result:", result);
console.log("----------");

/*
 * 在回调函数中 return false，会终止迭代；
 * --------------------------------------------------
 */
/* 1, 2 */
_.forEach(array01, item => {
  if (item === 3) {
    return false;
  }
  console.log(item);
});
console.log("----------");

/*
 * 在回调函数中 return，会终止本次迭代，继续下一次迭代；
 * --------------------------------------------------
 */
/* 1, 2, 4, 5 */
_.forEach(array01, item => {
  if (item === 3) {
    return;
  }

  console.log(item);
});
console.log("----------");

_.forEach(array01, (value, index, collection) => {
  delete array01[index];
});
/* [null,null,null,null,null] */
console.log(JSON.stringify(array01));
console.log("----------");
