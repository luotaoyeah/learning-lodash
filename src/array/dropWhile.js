const _ = require("lodash");

const users = [
  { user: "barney", active: false },
  { user: "fred", active: false },
  { user: "pebbles", active: true }
];

/* [ { user: 'pebbles', active: true } ] */
console.log(_.dropWhile(users, item => !item.active));

/* [ { user: 'barney', active: false },
  { user: 'fred', active: false },
  { user: 'pebbles', active: true } ] */
console.log(_.dropWhile(users, "active"));

/* [ { user: 'fred', active: false },
  { user: 'pebbles', active: true } ] */
console.log(_.dropWhile(users, _.matches({ user: "barney", active: false })));
