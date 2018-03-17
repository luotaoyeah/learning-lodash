const _ = require("lodash");

const array = [1, 2, 3, 4, 5, 4, 3, 2, 1];

/* [ 4, 5, 4 ] */
console.log(_.without(array, 1, 2, 3));

/* [ 1, 2, 3, 4, 5, 4, 3, 2, 1 ] */
console.log(array);
