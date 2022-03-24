const _ = require("lodash");

const array = [1, 2, 1, 2];

/* 1 */
console.log(_.indexOf(array, 2));

/* 3 */
console.log(_.indexOf(array, 2, 2));

/* 3 */
console.log(_.indexOf(array, 2, -2));

/* 1 */
console.log(_.indexOf(array, 2, -3));
