const _ = require("lodash");

/*
 * 判断'检查的值'是否是字符串原始类型，或者字符串包装类型（对象）；
 * --------------------------------------------------
 */

/* true */
console.log(_.isString("tom"));
/* false */
console.log(_.isString(18));
/* false */
console.log(_.isString(undefined));
/* false */
console.log(_.isString(null));
/* false */
console.log(_.isString(Number.NaN));
