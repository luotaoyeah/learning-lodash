const _ = require("lodash");

/*
 * 类似于 _.isEqual，可以自定义比较规则；
 * --------------------------------------------------
 */

/*
 * 对于简单类型，直接返回严格相等比较（===）的结果；
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
