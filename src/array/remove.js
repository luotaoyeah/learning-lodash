const _ = require("lodash");

const array01 = [{ x: 1, y: 1 }, { x: 1, y: 2 }, { x: 2, y: 2 }];

console.log(_.remove(array01, item => item.x === 1));

console.log(array01);
