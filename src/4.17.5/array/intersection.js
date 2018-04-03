const _ = require("lodash");

/* [ 2, 3 ] */
console.log(_.intersection([1, 2, 3], [3, 2, 0]));

/* [ 3 ] */
console.log(_.intersection([1, 2, 3], [3, 2, 1], [3, 4, 5]));
