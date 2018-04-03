const _ = require("lodash");

/*
 * 迭代列表元素，返回一个新的列表，新的列表中的元素对于断言回调返回值都为 true；
 * --------------------------------------------------
 */

const array = [1, 2, 3, 4, 5];

/* [ 1, 2 ] */
console.log(_.filter(array, item => item < 3));
console.log("----------");

/*
 * 传递给断言回调函数 3 个参数：'当前元素'，'当前索引'，'列表'
 * --------------------------------------------------
 */
_.filter(array, (item, index, collection) => {
  console.log(item, index, collection);
  return true;
});
