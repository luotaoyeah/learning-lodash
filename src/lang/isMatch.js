const _ = require("lodash");

/*
 * 检查'源对象'是否有一部分等于'属性对象'；
 * --------------------------------------------------
 */

/*
 * 只比较'属性对象'中给定的属性，即'部分比较'；
 * --------------------------------------------------
 */
console.log("----------: partial comparison");
const obj01 = { x: 1, y: 2, z: 3 };
/* true */
console.log(_.isMatch(obj01, { x: 1, z: 3 }));
/* false */
console.log(_.isMatch(obj01, { y: 3 }));

/*
 * '深度比较'；
 * --------------------------------------------------
 */
console.log("----------: deep comparison");
const obj02 = { x: { y: { z: 3, t: 4 } } };
/* true */
console.log(_.isMatch(obj02, { x: { y: { t: 4 } } }));

/*
 * 在进行比较的时候，如果'属性对象'的属性值是空数组（[]）或者空对象（{}），
 * 则只要'源对象'对应的属性是数组或者对象，比较结果就相等；
 * --------------------------------------------------
 */
console.log("----------: empty array & empty object");
const obj03 = { x: [1, 2], y: { z: 3 } };
/* true */
console.log(_.isMatch(obj03, { x: [], y: {} }));
