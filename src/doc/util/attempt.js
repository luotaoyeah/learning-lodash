const _ = require("lodash");

/*
 * 接收 2 个参数：'函数'，'参数'；
 * 尝试执行'函数'，并将'参数'传递给'函数'；
 * 如果'函数'报错，则返回错误对象，否则返回执行结果；
 */

console.log("\n-------------------------------------------------- 01");
const f01 = x => {
  if (x > 10) {
    throw new Error("x > 10");
  }

  return x * x;
};

const result01 = _.attempt(f01, 10);
if (_.isError(result01)) {
  console.log(result01.message);
} else {
  /* 100 */
  console.log(result01);
}

const result02 = _.attempt(f01, 11);
if (_.isError(result02)) {
  /* x > 10 */
  console.log(result02.message);
} else {
  console.log(result02);
}
