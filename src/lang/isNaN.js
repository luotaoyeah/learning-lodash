const _ = require("lodash");

/*
 * 检查值是否是 NaN
 */

/* true */
console.log(_.isNaN(NaN));
/* true */
console.log(_.isNaN(Number.NaN));
/* true */
console.log(_.isNaN(new Number(NaN)));
/* false */
console.log(_.isNaN(null));
console.log("----------");

/*
 * 全局作用域下的 isNaN 方法对于 undefined 和 非数字，返回结果为 true；
 * 而本方法返回结果为 false；
 * --------------------------------------------------
 */
/* false */
console.log(_.isNaN(undefined));
/* true */
console.log(isNaN(undefined));
/* false */
console.log(_.isNaN("tom"));
/* true */
console.log(isNaN("tom"));
