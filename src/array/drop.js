const _ = require("lodash");

/* [ 2, 3 ] */
console.log(_.drop([1, 2, 3]));
/* [ 1, 2, 3 ] */
console.log(_.drop([1, 2, 3], 0));
/* [ 3 ] */
console.log(_.drop([1, 2, 3], 2));
