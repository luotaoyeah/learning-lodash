const _ = require("lodash");

/*
 * 第一个对象的属性会被修改，且最后返回的就是第一个对象；
 * 其他对象的属性不会被修改；
 * --------------------------------------------------
 */

const foo = { x: 1 };
const bar = { y: 1 };
const result01 = _.merge(foo, bar, { z: 3 });
/* { x: 1, y: 1, z: 3 } */
console.log(foo);
/* true */
console.log(result01 === foo);
/* { y: 1 } */
console.log(bar);
console.log("----------");

/*
 * 可以合并数组元素；
 * --------------------------------------------------
 */
/* [ 'a', 'b', 3 ] */
console.log(_.merge([1, 2, 3], ["a", "b"]));
console.log("----------");

/*
 * 如果源对象（第2到n个参数）的属性值为 undefined，且目标对象（第1个参数）存在该属性，则该属性会被跳过；
 * --------------------------------------------------
 */
/* { x: 3, y: undefined } */
console.log(_.merge({ x: 1 }, { x: 3, y: undefined }));
/* { x: 3, y: null } */
console.log(_.merge({ x: 1, y: null }, { x: 3, y: undefined }));
console.log("----------");

/*
 * 对于同名属性，后面对象的属性值会覆盖前面对象的属性值；
 * --------------------------------------------------
 */
/* { x: 3 } */
console.log(_.merge({ x: 1 }, { x: 2 }, { x: 3 }));
console.log("----------");

/*
 * 从原型继承的属性也会被合并到目标对象；
 * 先合并自身属性，再合并继承属性；
 * --------------------------------------------------
 */
/* { z: 3, x: 1, y: 2 } */
console.log(_.merge({}, _.create({ x: 1, y: 2 }, { z: 3 })));
console.log("----------");

/*
 * 合并的时候是进行值传递，而不是引用传递；
 * --------------------------------------------------
 */
const foo02 = { x: { name: "tom" } };
const bar02 = { y: { age: 18 } };
const result02 = _.merge({}, foo02, bar02);
result02.x = { name: "cat" };
/* { x: { name: 'tom' } } */
console.log(foo02);
