const _ = require("lodash");

/*
 * 类似 _.cloneWith；
 * 可以自定义克隆规则；
 * 递归克隆；
 * --------------------------------------------------
 */

/*
 * 回调函数接收四个参数；
 * --------------------------------------------------
 */

const callback = (value, key, object, stack) => {
  console.log(`${key}: `, value);
};

const obj01 = [{ x: 1 }, { y: 2 }];
const cloneObj01 = _.cloneDeepWith(obj01, callback);
/* false */
console.log(obj01 === cloneObj01);
/* false */
console.log(obj01[0] === cloneObj01[0]);
console.log("----------");
