const _ = require("lodash");

/*
 * 类似于 _.isEqual，可以自定义比较规则；
 * --------------------------------------------------
 */

/*
 * 如果回调函数返回 undefined，则忽略比较规则，由方法自己进行比较；
 * --------------------------------------------------
 */
console.log("----------: isEqualWith");

const obj01 = {
  name: "tom",
  age: 18
};

const obj02 = {
  name: "tom",
  age: 19
};
/* false */
console.log(_.isEqual(obj01, obj02));
/* true */
console.log(
  _.isEqualWith(obj01, obj02, (value01, value02, key) => {
    if (key === "age") {
      return true;
    }
  })
);
