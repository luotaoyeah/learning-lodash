const _ = require("lodash");

/*
 * 接收自定义复制规则，其他跟 assign 类似；
 * --------------------------------------------------
 */
/* { a: 1, b: 2, d: 4 } */
console.log(
  _.assignWith(
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
