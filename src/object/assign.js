const _ = require("lodash");

/*
 * 只复制自身属性，不复制继承属性；
 * --------------------------------------------------
 */
function Foo() {
  this.x = 1;
}
Foo.prototype.y = 2;
/* { x: 1 } */
console.log(_.assign({}, new Foo()));
console.log("----------");

/*
 * 只复制儿子属性，不复制嵌套属性（和 merge 的区别）；
 * --------------------------------------------------
 */
/* { x: { b: 2 } } */
console.log(_.assign({ x: { a: 1 } }, { x: { b: 2 } }));
/* { x: { a: 1, b: 2 } } */
console.log(_.merge({ x: { a: 1 } }, { x: { b: 2 } }));
console.log("----------");

/*
 * 复制的是对象的引用（和 merge 的区别）；
 * --------------------------------------------------
 */
const foo01 = { x: { a: 1 } };
const bar01 = { x: { b: 2 } };
_.assign(foo01, bar01);
/* true */
console.log(foo01.x === bar01.x);

const foo02 = { x: { a: 1 } };
const bar02 = { x: { b: 2 } };
_.merge(foo02, bar02);
/* false */
console.log(foo02.x === bar02.x);
console.log("----------");

/*
 * 对同名属性，后面的属性值会覆盖前面的属性值；
 * --------------------------------------------------
 */
/* { x: 2 } */
console.log(_.assign({}, { x: 1 }, { x: 2 }));
