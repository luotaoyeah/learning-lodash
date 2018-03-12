const _ = require("lodash");

const array = [1, 2, 3];

/* [ '*', '*', '*' ] */
console.log(_.fill(array, "*"));

/* [ '*', '*', '*' ] */
console.log(array);

/* [ 1, '*', '*', 4, 5 ] */
console.log(_.fill([1, 2, 3, 4, 5], "*", 1, 3));
