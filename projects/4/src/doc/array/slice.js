const _ = require("lodash");

const array = [1, 2, 3, 4, 5];

/* 2 */
console.log(_.slice(array, 1, 2));

/* 3, 4, 5 */
console.log(_.slice(array, 2, 9));
