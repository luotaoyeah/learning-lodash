const _ = require("lodash");

/*
 * 接受一个参数：'属性路径'；
 * 创建一个'函数'，
 * '函数'接受一个参数：'对象'，返回值为'对象'在'属性路径'的属性值；
 * --------------------------------------------------
 */

const objects = [
  {
    a: {
      b: "tom"
    }
  },
  {
    a: {
      b: 18
    }
  }
];

const getB = _.property("a.b");

/* tom */
console.log(getB(objects[0]));
/* 18 */
console.log(getB(objects[1]));
/* [ 'tom', 18 ] */
console.log(_.map(objects, getB));

/*
 * 当'属性路径（path）'对于给定对象不存在时，返回 undefined
 * --------------------------------------------------
 */
/* undefined */
console.log(_.property("a.b.c")(objects[0]));
