const _ = require("lodash");

/*
 * 跟 _.property() 相反；
 * 接受一个参数：'对象'；
 * 创建一个'函数'，
 * '函数'接受一个参数：'属性路径'，返回值为'对象'在'属性路径'的属性值；
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

const getB = _.propertyOf(objects);

/* tom */
console.log(getB("[0].a.b"));
/* 18 */
console.log(getB("[1].a.b"));
