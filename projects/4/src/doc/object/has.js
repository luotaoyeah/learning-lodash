const _ = require("lodash");

/*
 * 接收 2 个参数：'对象'，'属性路径'；
 * 检查'对象'是否存在'属性路径'（非继承属性）；
 * --------------------------------------------------
 */

const object = { a: { b: "tom" } };
const other = _.create(object, {
  c: 18
});

/* true */
console.log(_.has(object, "a.b"));
/* false */
console.log(_.has(other, "a.b"));
/* tom */
console.log(other.a.b);
