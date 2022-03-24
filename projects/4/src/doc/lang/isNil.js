const _ = require("lodash");

/*
 * 接收 1 个参数：'检查的值'；
 * 判断'检查的值'是否是 undefined 或者 null；
 * --------------------------------------------------
 */

/* true */
console.log(_.isNil(undefined));
/* true */
console.log(_.isNil(null));
/* false */
console.log(_.isNil(Number.NaN));
/* false */
console.log(_.isNil(0));
/* false */
console.log(_.isNil(""));
/* false */
console.log(_.isNil(false));
