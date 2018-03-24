const _ = require("lodash");

/*
 * 自定义合并规则；
 * --------------------------------------------------
 */
const obj01 = { x: [1], y: [2] };
const obj02 = { x: [3], y: [4] };
/* { x: [ 3 ], y: [ 4 ] } */
console.log(_.merge({}, obj01, obj02));
/* { x: [ 1, 3 ], y: [ 2, 4 ] } */
console.log(
  _.mergeWith({}, obj01, obj02, (objValue, srcValue, key, obj, src) => {
    if (_.isArray(objValue)) {
      return objValue.concat(srcValue);
    }
  })
);
console.log("----------");

/*
 * 如果回调函数返回 undefined，则由 mergeWith 方法自己进行合并；
 * --------------------------------------------------
 */
/* { x: 4, y: 4 } */
console.log(
  _.mergeWith({ x: 1, y: 2 }, { x: 3, y: 4 }, (objValue, srcValue, key) => {
    if (key === "x") {
      return objValue + srcValue;
    }
  })
);
