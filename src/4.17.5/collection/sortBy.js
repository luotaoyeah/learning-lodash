const _ = require("lodash");

/*
 * 接收 2 个参数：'数组'，'排序规则数组'；
 * 根据'排序规则数组'中的规则，对'数组'进行正向排序；
 * 不修改'数组'，返回排序之后的新数组；
 * --------------------------------------------------
 */
console.log("----------: 使用函数作为排序规则");
const array01 = [3, 5, 4, 1, 2];
/* [ 1, 2, 3, 4, 5 ] */
console.log(_.sortBy(array01, [item => item]));
/* [ 3, 5, 4, 1, 2 ] */
console.log(array01);

/*
 * 相等元素的顺序保持不变；
 * --------------------------------------------------
 */
console.log("----------: 相等元素的顺序保持不变");
const array02 = [
  { name: "tom", age: 18 },
  { name: "tom", age: 17 },
  { name: "cat", age: 18 }
];
/*
 * [ { name: 'cat', age: 18 }, { name: 'tom', age: 18 }, { name: 'tom', age: 17 } ]
 */
console.log(_.sortBy(array02, [item => item.name]));

/*
 * 直接使用属性名称作为排序规则；
 *
 * --------------------------------------------------
 */
console.log("----------: 直接使用属性名称作为排序规则");
const array03 = [
  { name: "tom", age: 18 },
  { name: "tom", age: 17 },
  { name: "cat", age: 18 }
];
/*
 * [ { name: 'cat', age: 18 }, { name: 'tom', age: 17 }, { name: 'tom', age: 18 } ]
 */
console.log(_.sortBy(array03, ["name", "age"]));
console.log(_.sortBy(array03, [_.identity("name"), _.identity("age")]));
