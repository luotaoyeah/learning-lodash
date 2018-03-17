const _ = require("lodash");

/* [ 3, 4, 5 ] */
console.log(_.takeRightWhile([1, 2, 3, 4, 5], item => item > 2));
