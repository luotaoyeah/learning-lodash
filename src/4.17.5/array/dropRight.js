const _ = require("lodash");

/* [ 1, 2 ] */
console.log(_.dropRight([1, 2, 3]));
/* [ 1, 2, 3 ] */
console.log(_.dropRight([1, 2, 3], 0));
/* [ 1 ] */
console.log(_.dropRight([1, 2, 3], 2));
