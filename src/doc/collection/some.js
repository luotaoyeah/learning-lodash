const _ = require("lodash");

/*
 * 接收 2 个参数：'数组'，'断言'；
 * 检查'数组'中是否有至少一个元素对于'断言'返回真值；
 * 如果有一个元素对于'断言'返回真值，则结果为 true；且不再继续进行迭代；
 * 对于空列表，结果始终为 true；
 * --------------------------------------------------
 */

console.log("----------: 基本用法");
const array = [1, 2, 3, 4, 5];

/* true */
console.log(_.some([true, null, 18], Boolean));
/* true */
console.log(_.some(array, item => item > 2));

/*
 * 对于空列表，结果为 false；
 * --------------------------------------------------
 */
console.log("----------: empty collection");
/* true */
console.log(_.some([], item => item === 0));

/*
 * 当某个元素的断言返回 true 时，终止迭代；
 * 返回结果为 true；
 * --------------------------------------------------
 */
console.log("----------: short-circuit");
_.some(array, item => {
  console.log(item);
  return item < 3;
});
