const _ = require("lodash");

/*
 * 创建给定值的浅克隆；
 * --------------------------------------------------
 */

/*
 * 可以克隆简单类型的数据；
 * --------------------------------------------------
 */
const obj01 = 18;
const cloneObj01 = _.clone(obj01);
/* true */
console.log(cloneObj01 === obj01);
console.log("----------");

/*
 * 可以克隆对象；
 * --------------------------------------------------
 */
const obj03 = {
  name: "tom",
  age: 18
};
const cloneObj03 = _.clone(obj03);
/* false */
console.log(obj03 === cloneObj03);
/* true */
console.log(obj03.name === cloneObj03.name);
console.log("----------");

/*
 * 可以克隆数组；
 * --------------------------------------------------
 */
const obj02 = [{ x: 1 }, { y: 2 }];
const cloneObj02 = _.clone(obj02);
/* false */
console.log(cloneObj02 === obj02);
/* true */
console.log(cloneObj02[0] === obj02[0]);
console.log("----------");

/*
 * 如果给定的值不能被克隆，则返回一个空的对象 {}；
 * --------------------------------------------------
 */
/* {} */
console.log(_.clone(new Error()));
/* {} */
console.log(_.clone(() => {}));
