const _ = require("lodash");

/*
 * 检查给定值是否是整数；
 * --------------------------------------------------
 */

/* false */
console.log(_.isInteger(Number.NaN));
/* false */
console.log(_.isInteger(Number.POSITIVE_INFINITY));
/* false */
console.log(_.isInteger(Number.NEGATIVE_INFINITY));

/*
 * Number.MAX_VALUE 是整数，表示在 JavaScript 里面可以表示的最大的数字；
 * Number.MIN_VALUE 不是整数，表示在 JavaScript 里面可以表示的最接近于 0 的数字；
 */
/* true */
console.log(_.isInteger(Number.MAX_VALUE));
/* false */
console.log(_.isInteger(Number.MIN_VALUE));
/* true */
console.log(Number.MIN_VALUE > 0);
