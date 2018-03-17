/**
 * TODO
 */
const _ = require("lodash");

/* [ 1, 2, 3, 4 ] */
console.log(_.xor([1, 2], [3, 4]));

/* [ 1, 3, 4, 5 ] */
console.log(_.xor([1, 2, 3], [4, 2, 5]));

/* [ 1, 3 ] */
console.log(_.xor([1, 2], [2, 3]));
