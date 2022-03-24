const _ = require("lodash");

/* [ 5 ] */
console.log(_.takeRight([1, 2, 3, 4, 5]));

/* [ 1, 2, 3, 4, 5 ] */
console.log(_.takeRight([1, 2, 3, 4, 5], 6));
