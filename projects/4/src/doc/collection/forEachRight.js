const _ = require("lodash");

/*
 * 类似 _.forEach，从右往左进行迭代；
 * --------------------------------------------------
 */
const array = [1, 2, 3, 4, 5];
/* 5, 4, 3, 2, 1 */
_.forEachRight(array, item => {
  console.log(item);
});
