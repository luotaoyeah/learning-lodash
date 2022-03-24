const _ = require("lodash");

/* [ 111, 222 ] */
console.log(_.zipWith([1, 2], [10, 20], [100, 200], (x, y, z) => x + y + z));
