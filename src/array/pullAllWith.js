const _ = require("lodash");

const array01 = [{ x: 1, y: 1 }, { x: 1, y: 2 }, { x: 2, y: 2 }];

/* [ { x: 1, y: 1 }, { x: 2, y: 2 } ] */
console.log(_.pullAllWith(array01, [{ x: 1, y: 2 }], _.isEqual));
