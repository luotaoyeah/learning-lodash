const _ = require("lodash");

/*
 * 类似 _.isMatch，可以自定义比较规则；
 * 接收3个参数：'源对象'，'属性对象'，'自定义比较规则回调函数'；
 * 检查'源对象'是否部分等于'属性对象'；
 * --------------------------------------------------
 */

const obj01 = { x: 1, y: 2, z: 3 };
/* false */
console.log(_.isMatch(obj01, { x: 1, z: 5 }));
/* true */
console.log(
  _.isMatchWith(obj01, { x: 1, z: 5 }, (objValue, srcValue, key) => {
    if (key === "z") {
      return true;
    }
  })
);
