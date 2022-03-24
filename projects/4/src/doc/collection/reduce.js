const _ = require("lodash");

/*
 * 接收 3 个参数：'集合'，'迭代函数'，'累加器（即：初始值）（可选）'；
 * 迭代'集合'元素，返回累加结果；
 * --------------------------------------------------
 */

/*
 * '迭代函数'的第一个参数为上一次'迭代函数'的返回结果；
 * 如果没有指定'初始值'，则'初始值'为'集合'的第一个元素，且从'集合'第二个元素开始迭代；
 */
console.log("\n-------------------------------------------------- 01");
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

console.log("\n-------------------------------------------------- 02");
/* 3-2-1 */
console.log(
  _.reduce([3, 2, 1], (accumulator, value, index) => {
    console.log("index:", index);
    return `${accumulator}-${value}`;
  })
);

console.log("\n-------------------------------------------------- 03");
/* 0-3-2-1 */
console.log(
  _.reduce(
    [3, 2, 1],
    (accumulator, value, index) => {
      console.log("index:", index);
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
