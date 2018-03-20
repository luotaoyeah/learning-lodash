const _ = require("lodash");

const array = [1, 2, 3, 4, 5];

/*
 * 从右往左进行迭代
 */
/* 5, 4, 3, 2, 1 */
_.forEachRight(array, item => {
  console.log(item);
});
