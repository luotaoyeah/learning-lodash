const _ = require("lodash");

/*
 * 比较两个值是否相等；
 * --------------------------------------------------
 */

/*
 * 对于简单类型，直接返回严格相等比较（===）的结果；
 * --------------------------------------------------
 */
console.log("----------: primitive");
/* true */
console.log(_.isEqual(true, true));
/* true */
console.log(_.isEqual(1, 1));
/* true */
console.log(_.isEqual("", ""));
/* true */
console.log(_.isEqual(undefined, undefined));
/* true */
console.log(_.isEqual(null, null));

/*
 * 两个 NaN 比较，返回 true；
 * 两个 NaN 进行严格相等比较，返回 false；
 * --------------------------------------------------
 */
console.log("----------: NaN");
/* true */
console.log(_.isEqual(Number.NaN, Number.NaN));
/* false */
console.log(Number.NaN === Number.NaN);

/*
 * 两个对象比较，比较他们的 own，enumerable 的属性；
 * --------------------------------------------------
 */
console.log("----------: object");
const obj01 = _.create({ name: "tom" }, { age: 18 });
const obj02 = { age: 18 };
/* true */
console.log(_.isEqual(obj01, obj02));

/*
 * 两个对象比较，如果属性还是对象，则递归比较他们的 own，enumerable 的属性；
 * --------------------------------------------------
 */
console.log("----------: nested object");
const obj03 = _.create({ age: 18 }, { person: { name: "tom" } });
const obj04 = { person: { name: "tom" } };
/* true */
console.log(_.isEqual(obj03, obj04));

/*
 * 两个数组比较，比较他们的元素；
 * --------------------------------------------------
 */
console.log("----------: array");
const array01 = [1, 2, 3];
const array02 = new Array(1, 2, 3);
/* true */
console.log(_.isEqual(array01, array02));
/* false */
console.log(array01 === array02);

/*
 * 两个函数比较，直接返回严格相等比较（===）的结果；
 * --------------------------------------------------
 */
console.log("----------: function");
function f01() {}
function f02() {}
/* false */
console.log(_.isEqual(f01, f02));
/* false */
console.log(f01 === f02);
