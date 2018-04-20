const _ = require("lodash");

/*
 * 接收 3 个参数：'集合'，'迭代函数'，'累加器（即：初始值）（可选）'；
 * 迭代'集合'元素，返回累加结果；
 * --------------------------------------------------
 */

/*
 * '迭代函数'的第 1 个参数为上一次'迭代函数'的返回；
 * '迭代函数'第一次运行时，没有上一次的返回，所以其第 1 个参数为'累加器'；
 * 如果没有指定'累加器'，则'迭代函数'第一次运行时，直接返回第一个元素；
 * --------------------------------------------------
 */
console.log("----------: 基本用法");
/* 6 */
console.log(
  _.reduce(
    [1, 2, 3],
    (accumulator, value, index, collection) => {
      return accumulator + value;
    },
    0
  )
);
/* 3-2-1 */
console.log(
  _.reduce([3, 2, 1], (accumulator, value) => {
    return accumulator + "-" + value;
  })
);
/* 0-3-2-1 */
console.log(
  _.reduce(
    [3, 2, 1],
    (accumulator, value) => {
      return accumulator + "-" + value;
    },
    0
  )
);
/* { '1': [ 'a', 'c' ], '2': [ 'b' ] } */
console.log(
  _.reduce(
    { a: 1, b: 2, c: 1 },
    (accumulator, value, index, collection) => {
      if (!accumulator[value]) {
        accumulator[value] = [];
      }

      accumulator[value].push(index);
      return accumulator;
    },
    {}
  )
);
