const _ = require("lodash");

/*
 * 判断'检查的值'是否是 undefined；
 * --------------------------------------------------
 */

/* true */
console.log(_.isUndefined(undefined));
/* false */
console.log(_.isUndefined(null));
/* false */
console.log(_.isUndefined(Number.NaN));
/* false */
console.log(_.isUndefined(0));
/* false */
console.log(_.isUndefined(""));
/* false */
console.log(_.isUndefined(false));
