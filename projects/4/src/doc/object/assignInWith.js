const _ = require("lodash");

/*
 * 复制自身属性，同时复制继承属性，其他跟 assignWith 类似；
 * --------------------------------------------------
 */
/* { a: 1, b: 2, d: 4, c: 3 } */
console.log(
  _.assignInWith(
    { a: 1 },
    { b: 2 },
    _.create({ c: 3 }, { d: 4 }),
    { a: 4, b: 5 },
    (objValue, srcValue) => {
      if (_.isUndefined(objValue)) {
        return srcValue;
      } else {
        return objValue;
      }
    }
  )
);
