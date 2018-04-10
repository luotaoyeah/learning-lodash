const _ = require("lodash");

/*
 * 接收 2 个参数：'数组'，'断言'
 * 迭代'数组'，返回一个新的数组，新的数组中的元素对于断言回调返回值都为 true；
 * --------------------------------------------------
 */
console.log("----------: 基本用法");
const array = [1, 2, 3, 4, 5];
/* [ 1, 2 ] */
console.log(_.filter(array, item => item < 3));

/*
 * 传递给断言回调函数 3 个参数：'当前元素'，'当前索引'，'列表'
 * --------------------------------------------------
 */
console.log("----------: 回调参数");
_.filter(array, (item, index, collection) => {
  console.log(item, index, collection);
  return true;
});
