const _ = require("lodash");

/*
 * 跟 _.mapValues() 相反；
 * 接受 2 个参数：'对象'，'求键函数'；
 * 返回一个新的对象，'返回对象'的属性值跟'对象'一样，属性名为'求键函数'的返回值；
 * --------------------------------------------------
 */

const obj01 = { x: 1, y: 2, z: 3 };
const obj02 = _.mapKeys(obj01, (value, index) => {
  return value * value;
});
/* { '1': 1, '4': 2, '9': 3 } */
console.log(obj02);
