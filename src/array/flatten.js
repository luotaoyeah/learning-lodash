const _ = require("lodash");

/* [ 1, 2, [ 3, [ 4 ] ], 5 ] */
console.log(_.flatten([1, [2, [3, [4]]], 5]));

/* [ 1, 2, 3, 4, 5 ] */
console.log(_.flatten([1, [2], 3, [4], 5]));
