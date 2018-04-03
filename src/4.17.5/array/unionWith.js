const _ = require("lodash");

const objects = [{ x: 1, y: 2 }, { x: 2, y: 1 }];
const others = [{ x: 1, y: 1 }, { x: 1, y: 2 }];

/* [ { x: 1, y: 2 }, { x: 2, y: 1 }, { x: 1, y: 1 } ] */
console.log(_.unionWith(objects, others, _.isEqual));
