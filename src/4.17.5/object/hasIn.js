const _ = require("lodash");

/*
 * 接收 2 个参数：'对象'，'属性路径'；
 * 检查'对象'是否存在'属性路径'（包括继承属性）；
 * --------------------------------------------------
 */

const object = { a: { b: "tom" } };
const other = _.create(object, {
  c: 18
});

/* true */
console.log(_.hasIn(object, "a.b"));
/* true */
console.log(_.hasIn(other, "a.b"));
