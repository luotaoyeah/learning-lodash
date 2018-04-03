const _ = require("lodash");

/*
 * 接收 2 个参数：'属性路径'，'值'；
 * 创建 1 个'函数'，
 * '函数'接收 1 个参数：'源对象'，
 * 检查'源对象'在'属性路径'的值是否等于'值'；
 * --------------------------------------------------
 */
const obj01 = { x: { y: { z: 3, t: 4 } } };
/* true */
console.log(_.matchesProperty("x.y.z", 3)(obj01));
/* false */
console.log(_.matchesProperty("x.z.y[0]", 3)(obj01));
