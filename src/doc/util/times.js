const _ = require("lodash");

/*
 * 接收 2 个参数：'次数'，'函数'；
 * 重复执行'次数'次'函数'，返回每次的执行结果组成的数组；
 * --------------------------------------------------
 */
console.log("----------: 基本用法");
const f01 = () => {
  return "tom";
};
/* [ 'tom', 'tom', 'tom' ] */
console.log(_.times(3, f01));

/*
 * 传递给'函数' 1 个参数：'索引'；
 * --------------------------------------------------
 */
console.log("----------: params");
const f02 = index => {
  return `tom-${index}`;
};
/* [ 'tom-0', 'tom-1', 'tom-2' ] */
console.log(_.times(3, f02));
