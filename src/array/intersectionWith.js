const _ = require("lodash");

const objects = [{ x: 1, y: 2 }, { x: 2, y: 1 }];
const others = [{ x: 1, y: 1 }, { x: 1, y: 2 }];

/* [ { x: 1, y: 2 } ] */
console.log(_.intersectionWith(objects, others, _.isEqual));

/* [ { x: 1, y: 2 }, { x: 2, y: 1 } ] */
console.log(_.intersectionBy(objects, others, "y"));
