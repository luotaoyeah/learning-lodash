const _ = require("lodash");

const array = [1, [2, [3, [4]]], 5];

/* [ 1, 2, [ 3, [ 4 ] ], 5 ] */
console.log(_.flattenDepth(array));

/* [ 1, 2, 3, [ 4 ], 5 ] */
console.log(_.flattenDepth(array, 2));

/* [ 1, 2, 3, 4, 5 ] */
console.log(_.flattenDepth(array, 3));

/* [ 1, 2, 3, 4, 5 ] */
console.log(_.flattenDepth(array, 4));
