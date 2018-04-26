const _ = require("lodash");

/*
 * 接收 1 个参数：'属性对象'；
 * 创建一个类似于 _.isMatch 的'函数'，
 * '函数'接收 1 个参数：'源对象'，
 * 检查'源对象'是否部分等于'属性对象'；
 * --------------------------------------------------
 */
const obj01 = { x: { y: { z: 3, t: 4 } } };
/* true */
console.log(_.isMatch(obj01, { x: { y: { t: 4 } } }));
/* true */
console.log(_.matches({ x: { y: { t: 4 } } })(obj01));

const obj02 = [{ x: 1, y: 2 }, { x: 2, y: 1 }];
console.log(_.filter(obj02, _.matches({ x: 1, y: 1 })));
