const _ = require("lodash");

/* [ 1, 2 ] */
console.log(_.initial([1, 2, 3]));

/* [ 1, 2, 3 ] */
console.log(_.initial([1, 2, 3, 4]));

/* [ 1, 2, 3, 4 ] */
console.log(_.initial([1, 2, 3, 4, 5]));
