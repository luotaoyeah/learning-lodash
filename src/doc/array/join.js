const _ = require("lodash");

/* 1, 2, 3 */
console.log(_.join([1, 2, 3], ", "));

/* 123 */
console.log(_.join([1, 2, 3], ""));

/* 1-2-3 */
console.log(_.join([1, 2, 3], "-"));
