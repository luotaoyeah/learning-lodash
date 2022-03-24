const _ = require("lodash");

/*
 * 类似 _.reduce()；
 * 区别：从右往左迭代；
 * --------------------------------------------------
 */
console.log("----------: 基本用法");
/* 3-2-1 */
console.log(
  _.reduce([3, 2, 1], (accumulator, value, index) => {
    return `${accumulator}-${value}`;
  })
);
/* 1-2-3 */
console.log(
  _.reduceRight([3, 2, 1], (accumulator, value, index) => {
    return `${accumulator}-${value}`;
  })
);
