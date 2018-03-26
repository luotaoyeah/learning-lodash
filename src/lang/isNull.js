const _ = require("lodash");

/*
 * 检查值是否是 null
 * --------------------------------------------------
 */

/* true */
console.log(_.isNull(null));
/* false */
console.log(_.isNull(undefined));
/* false */
console.log(_.isNull(Number.NaN));
/* false */
console.log(_.isNull(0));
/* false */
console.log(_.isNull(""));
/* false */
console.log(_.isNull(false));
