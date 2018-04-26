const _ = require("lodash");

const array = [1];
/* [ 1, 2, 3, [4] ] */
console.log(_.concat(array, 2, [3], [[4]]));
/* [ 1 ] */
console.log(array);
