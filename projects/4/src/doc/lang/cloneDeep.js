const _ = require("lodash");

/*
 * 类似 _.clone；
 * 创建给定值的深克隆；
 * --------------------------------------------------
 */

/*
 * 对属性进行递归克隆；
 * --------------------------------------------------
 */
const obj01 = [{ x: 1 }, { y: 2 }];
const cloneObj01 = _.cloneDeep(obj01);
/* false */
console.log(obj01 === cloneObj01);
/* false */
console.log(obj01[0] === cloneObj01[0]);
console.log("----------");

/*
 * 只克隆自身属性，对于继承属性，直接浅拷贝；
 * --------------------------------------------------
 */
const obj02 = _.create({ x: { name: "tom" } }, { y: { age: 18 } });
const cloneObj02 = _.cloneDeep(obj02);
/* true */
console.log(obj02.x === cloneObj02.x);
/* false */
console.log(obj02.y === cloneObj02.y);
