const _ = require("lodash");

/*
 * 接收 2 个参数：'数组'，'断言'；
 * 检查'数组'所有元素，对于'断言'是否都返回真值；
 * 如果有一个元素对于'断言'返回假值，则结果为 false；且不再继续进行迭代；
 * 对于空列表，结果始终为 true；
 * --------------------------------------------------
 */

const array = [1, 2, 3, 4, 5];

/* false */
console.log(_.every([true, null, 18], Boolean));

/* false */
console.log(_.every(array, item => item > 2));
console.log("----------");

/*
 * 传递给断言回调函数 3 个参数：'当前元素'，'当前索引'，'列表'
 * --------------------------------------------------
 */
_.every(array, (item, index, collection) => {
  console.log(item, index, collection);
  return true;
});
console.log("----------");

/*
 * 对于空列表，结果始终为 true；
 * --------------------------------------------------
 */
/* true */
console.log(_.every([], item => item === 0));
console.log("----------");

/*
 * 当某个元素的断言返回 false 时，终止迭代；
 * 返回结果为 false；
 * --------------------------------------------------
 */
_.every(array, item => {
  console.log(item);
  return item < 3;
});
