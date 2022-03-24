const _ = require("lodash");

/* [1] */
console.log(_.difference([1, 2], [2, 3]));

/* [3, 2] */
console.log(_.difference([3, 1, 2], [1, 4, 5]));

/* [ 3, 2, 2, 3 ] */
console.log(_.difference([3, 2, 1, 2, 3], [1, 4, 5]));
