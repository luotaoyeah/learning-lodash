const _ = require("lodash");

/*
 * 接受 2 个参数：'对象'，'求值函数'；
 * 返回一个新的对象，'返回对象'的属性跟'对象'一样，属性值为'求值函数'的返回值；
 * --------------------------------------------------
 */

const obj01 = { x: 1, y: 2, z: 3 };
const obj02 = _.mapValues(obj01, (value, index) => {
  return value * value;
});
/* { x: 1, y: 4, z: 9 } */
console.log(obj02);
