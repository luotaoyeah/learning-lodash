const _ = require("lodash");

/* 3 */
console.log(_.lastIndexOf([1, 2, 1, 2], 2));

/* 1 */
console.log(_.lastIndexOf([1, 2, 1, 2], 2, -2));

/* 1 */
console.log(_.lastIndexOf([1, 2, 1, 2], 2, 1));
