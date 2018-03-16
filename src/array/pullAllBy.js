const _ = require("lodash");

const array01 = [1, 2, 3, 4, 5, 4, 3, 2, 1];

/* [ 3, 4, 5, 4, 3 ] */
console.log(_.pullAllBy(array01, [1, 2]));

/* [ 3, 4, 5, 4, 3 ] */
console.log(array01);

const array02 = [1, 2, 3, 4, 5, 4, 3, 2, 1];

/* [ 3, 4, 5, 4, 3 ] */
console.log(_.pullAllBy(array02, [1, 2], item => item + 1));
