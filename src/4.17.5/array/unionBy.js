const _ = require("lodash");

/* [ 2.1, 1.1 ] */
console.log(_.unionBy([2.1], [1.1, 2.2], Math.floor));
