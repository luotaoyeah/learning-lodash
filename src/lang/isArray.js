const _ = require("lodash");

/*
 * 检查给定值是否是数组；
 * --------------------------------------------------
 */

/* true */
console.log(_.isArray([]));
/* true */
console.log(_.isArray([1, 2, 3]));
/* true */
console.log(_.isArray(new Array(3)));
/* false */
console.log(_.isArray(true));
/* false */
console.log(_.isArray(0));
/* false */
console.log(_.isArray("tom"));

/*
 * arguments 是一个类数组对象，不是真正的数组；
 */
(function() {
  /* false */
  console.log(_.isArray(arguments));
})();
