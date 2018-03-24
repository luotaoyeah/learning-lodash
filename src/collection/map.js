const _ = require("lodash");

/*
 *
 */

/* [ 1, 4, 9 ] */
console.log(_.map([1, 2, 3], item => item * item));
console.log("----------");

/*
 * 第一个参数可以是对象；
 * 迭代对象的属性；
 * --------------------------------------------------
 */
/* [ 'name_tom', 'age_18' ] */
console.log(
  _.map(
    {
      name: "tom",
      age: 18
    },
    (value, key) => {
      return `${key}_${value}`;
    }
  )
);
