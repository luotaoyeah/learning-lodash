const _ = require("lodash");

const array01 = [1, 2, 3, 4, 5, 4, 3, 2, 1];

/* [ 3, 4, 5, 4, 3 ] */
console.log(_.pull(array01, 1, 2));

/* [ 3, 4, 5, 4, 3 ] */
console.log(array01);
