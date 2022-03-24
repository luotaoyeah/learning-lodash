const _ = require("lodash");

/* [ 2.1, 1.2 ] */
console.log(_.uniqBy([2.1, 1.2, 2.3], Math.floor));
