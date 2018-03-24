const _ = require("lodash");

/*
 * 复制自身属性，同时复制继承属性（其他跟 assign 方法一样）；
 * --------------------------------------------------
 */
function Foo() {
  this.x = 1;
}
Foo.prototype.y = 2;
/* { x: 1, y: 2 } */
console.log(_.assignIn({}, new Foo()));
console.log("----------");
