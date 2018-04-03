const _ = require("lodash");

/*
 * 接收 1 个参数：'断言数组'；
 * 创建一个'函数'，'函数'接收 1 个参数：'值'，
 * 判断'值'对于某一个断言是否返回真值；
 * --------------------------------------------------
 */
console.log("----------: 基本用法");
const f01 = _.overSome([_.isString, _.isEmpty]);
/* true */
console.log(f01(""));
/* true */
console.log(f01(0));
/* true */
console.log(f01("tom"));
