const _ = require("lodash");

/*
 * 检查给定值是否是数字原始类型，或者数字包装类型（对象）；
 * --------------------------------------------------
 */
/* true */
console.log(_.isNumber(0));
/* true */
console.log(_.isNumber(new Number()));
/* true */
console.log(_.isNumber(Number.NaN));
/* true */
console.log(_.isNumber(Number.NEGATIVE_INFINITY));
/* true */
console.log(_.isNumber(Number.POSITIVE_INFINITY));
/* true */
console.log(_.isNumber(Number.MAX_VALUE));
/* true */
console.log(_.isNumber(NaN));
/* true */
console.log(_.isNumber(Infinity));
/* true */
console.log(_.isNumber(-Infinity));
/* false */
console.log(_.isNumber("0"));
