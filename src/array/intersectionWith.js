const _ = require("lodash");

const array01 = [{ x: 1, y: 2 }, { x: 2, y: 1 }];
const array02 = [{ x: 1, y: 1 }, { x: 1, y: 2 }];

/* [ { x: 1, y: 2 } ] */
console.log(_.intersectionWith(array01, array02, _.isEqual));

/* [ { x: 1, y: 2 }, { x: 2, y: 1 } ] */
console.log(_.intersectionBy(array01, array02, "y"));

const array03 = [{ x: 1, y: 2 }, { x: 2, y: 1 }, { x: 1, y: 3 }];
const array04 = [{ x: 1, y: 1 }, { x: 1, y: 2 }];

/* [ { x: 1, y: 2 } ] */
console.log(
  _.intersectionWith(
    array03,
    array04,
    (item01, item02) => item01.x === item02.x
  )
);
