const _ = require("lodash");

/*
 * 检查对象是否存在给定路径的直接属性（非继承属性）；
 * 接收两个参数：'对象'，'属性路径'；
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
