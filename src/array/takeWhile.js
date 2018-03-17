const _ = require("lodash");

/* [ 1 ] */
console.log(_.takeWhile([1, 2, 3, 4, 5], item => item < 2));
