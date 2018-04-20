const _ = require("lodash");

/*
 * 类似 _.reduce()；
 * 接受 3 个参数：'集合'，'迭代函数'，'累加器（可选）'；
 * 迭代'集合'元素，返回累加结果；
 * --------------------------------------------------
 */

/*
 * 简单来讲，对于 _.transform，始终只有一个 accumulator 对象，
 * （如果没有指定，则会有一个初始的空对象或空数组）；
 * 在每次迭代中，可以修改这个 accumulator 对象，
 * 最终的返回结果就是这个 accumulator 对象；
 * --------------------------------------------------
 */

/*
 * 与 reduce 的区别：
 *     如果没有指定'累加器'，则初始的累加器为：'空对象（集合为对象）'，'空数组（集合为数组）'；
 *     '迭代函数'的第 1 个参数为'累加器'对象，而不是上一次的返回；
 *     '迭代函数'中不需要返回结果；
 * --------------------------------------------------
 */
/* [ 1, 4, 9 ] */
console.log(
  _.transform([1, 2, 3], (accumulator, value, index) => {
    accumulator[index] = value * value;
  })
);

/*
 * 与 reduce 的区别：
 *     如果在'迭代函数'中返回 false，则终止迭代；
 * --------------------------------------------------
 */
console.log("----------: return false");
/* [ 1, 4 ] */
console.log(
  _.transform([1, 2, 3], (accumulator, value, index) => {
    accumulator[index] = value * value;
    if (index > 0) {
      return false;
    }
  })
);
