const _ = require("lodash");

/*
 * 接收 1 个参数：'函数数组'；
 * 创建一个函数，函数的返回结果为：依次执行'函数数组'中的函数，上一个函数的返回值作为下一个函数的输入参数；
 * 类似于管道（pipeline）；
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

/* 18 */
console.log(_.flow(add, square, double)(1, 2));
