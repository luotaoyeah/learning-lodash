const _ = require("lodash");

/*
 * 将'给定的值'转换为数组；
 * --------------------------------------------------
 */

/*
 * 如果'给定的值'是'number'，'boolean'，'null'，'undefined'，'空的数组'，'空的对象'，则返回空数组；
 * --------------------------------------------------
 */
console.log("----------: []");
/* [] */
console.log(_.toArray(18));
/* [] */
console.log(_.toArray(true));
/* [] */
console.log(_.toArray(null));
/* [] */
console.log(_.toArray(undefined));
/* [] */
console.log(_.toArray({}));
/* [] */
console.log(_.toArray([]));

/*
 * 如果'给定的值'是字符串，则返回的数组的元素为所有字符；
 * --------------------------------------------------
 */
console.log("----------: string");
/* [ 't', 'o', 'm' ] */
console.log(_.toArray("tom"));

/*
 * 如果'给定的值'是对象，则返回的数组的元素为对象的属性值；
 * --------------------------------------------------
 */
console.log("----------: object");
/* [ 'tom', 18 ] */
console.log(_.toArray({ name: "tom", age: 18 }));
/* [ { name: 'tom' } ] */
console.log(_.toArray({ person: { name: "tom" } }));

/*
 * 如果'给定的值'是数组，则返回数组本身；
 * --------------------------------------------------
 */
console.log("----------: array");
/* [ 1, 2, 3 ] */
console.log(_.toArray([1, 2, 3]));
