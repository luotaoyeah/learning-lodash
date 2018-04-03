const _ = require("lodash");

/*
 * 将'给定的值'转换为字符串；
 * --------------------------------------------------
 */

/*
 * 如果'给定的值'是 null，undefined 返回空字符串（""）；
 * --------------------------------------------------
 */
console.log("----------: null & undefined");
console.log(_.toString(null));
console.log(_.toString(undefined));

/*
 * 如果'给定的值'是负数，保留符号；
 * --------------------------------------------------
 */
console.log("----------: signed number");
/* "-0" */
console.log(_.toString(-0));

/*
 * --------------------------------------------------
 */
console.log(_.toString(18));
console.log(_.toString("tom"));
console.log(_.toString(true));
console.log(_.toString(NaN));

/*
 * 如果'给定的值'是对象，直接调用对象的 toString() 方法；
 * --------------------------------------------------
 */
console.log("----------: object");
/* "[object Object]" */
console.log(_.toString({ name: "tom", age: 18 }));

/*
 * 如果'给定的值'是数组，返回逗号分隔的元素字符串；
 * --------------------------------------------------
 */
console.log("----------: array");
/* "1,2,3" */
console.log(_.toString([1, 2, 3]));
