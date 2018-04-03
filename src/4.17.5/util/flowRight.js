const _ = require("lodash");

/*
 * 类似 _.flow()；
 * 区别：从右往左执行'函数数组'中的函数；
 * --------------------------------------------------
 */
const add = (x, y) => {
  return x + y;
};
const square = x => {
  return x * x;
};
const double = x => {
  return x * 2;
};

const f01 = _.flowRight(double, square, add);
/* 18 */
console.log(f01(1, 2));
