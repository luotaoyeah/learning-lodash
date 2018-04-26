const _ = require("lodash");

/*
 * 接收 1 个参数：'断言数组'；
 * 创建一个'函数'，'函数'接收 1 个参数：'值'，
 * 判断'值'对于每一个断言是否都返回真值；
 * --------------------------------------------------
 */
console.log("----------: 基本用法");
const f01 = _.overEvery([_.isString, _.isEmpty]);
/* true */
console.log(f01(""));
/* false */
console.log(f01(0));
/* false */
console.log(f01("tom"));

/*
 * 跟 _.every() 的区别：
 *     _.every() 是判断多个值是否满足一个条件；
 *     _.overEvery() 是判断一个值是否满足多个条件；
 * --------------------------------------------------
 */
console.log("----------: difference with _.every()");
