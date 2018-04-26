const _ = require("lodash");

/*
 * 检查给定值是否是空的 Object，Array，Map，Set；
 * --------------------------------------------------
 */

/*
 * 如果给定值为原始数据类型，则返回结果为 true；
 * --------------------------------------------------
 */
/* true */
console.log(_.isEmpty(true));
/* true */
console.log(_.isEmpty(18));
/* true */
console.log(_.isEmpty(NaN));
/* true */
console.log(_.isEmpty(null));
/* true */
console.log(_.isEmpty(undefined));
console.log("----------");

/*
 * 如果给定值为字符串，则检查字符串长度是否为 0；
 * --------------------------------------------------
 */
const str01 = "";
const str02 = " ";
const str03 = "tom";
/* true */
console.log(_.isEmpty(str01));
/* false */
console.log(_.isEmpty(str02));
/* false */
console.log(_.isEmpty(str03));
console.log("----------");

/*
 * 如果给定值为 Object，则检查对象是否有 own，enumerable，string keyed 属性；
 * --------------------------------------------------
 */
const obj01 = _.create({ name: "tom" });
const obj02 = { name: "tom" };
/* true */
console.log(_.isEmpty(obj01));
/* false */
console.log(_.isEmpty(obj02));
console.log("----------");

/*
 * 如果给定值为 Array，则检查数组长度是否是 0；
 * --------------------------------------------------
 */
const array01 = [];
const array02 = [1, 2, 3];
/* true */
console.log(_.isEmpty(array01));
/* false */
console.log(_.isEmpty(array02));
console.log("----------");

/*
 * 如果给定值为 Map，则检查 size 是否是 0；
 * --------------------------------------------------
 */
const map01 = new Map();
const map02 = new Map([["name", "tom"], ["age", 18]]);
/* true */
console.log(_.isEmpty(map01));
/* false */
console.log(_.isEmpty(map02));
console.log("----------");

/*
 * 如果给定值为 Set，则检查 size 是否是 0；
 * --------------------------------------------------
 */
const set01 = new Set();
const set02 = new Set(["tom", 18]);
/* true */
console.log(_.isEmpty(set01));
/* false */
console.log(_.isEmpty(set02));
console.log("----------");

/*
 * 如果给定值为类数组对象（arguments），则检查 length 是否是 0；
 * --------------------------------------------------
 */
(function() {
  /* false */
  console.log(_.isEmpty(arguments));
})("tom");
console.log("----------");
