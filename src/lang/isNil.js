const _ = require("lodash");

/*
 * 检查值是否是 undefined 或者 null
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
