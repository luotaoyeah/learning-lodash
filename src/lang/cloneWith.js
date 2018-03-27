const _ = require("lodash");

/*
 * 类似 _.clone；
 * 可以自定义克隆规则；
 * --------------------------------------------------
 */

/*
 * 回调函数接收四个参数；
 * --------------------------------------------------
 */
const obj01 = { name: "tom", age: 18 };
const cloneObj01 = _.cloneWith(obj01, (value, key, object, stack) => {
  /* { name: 'tom', age: 18 } */
  console.log(value);
  /* undefined */
  console.log(key);
  /* undefined */
  console.log(object);
  /* undefined */
  console.log(stack);
  return value;
});
/* true */
console.log(obj01 === cloneObj01);
console.log("----------");

/*
 * 回调函数的返回值作为克隆结果；
 * --------------------------------------------------
 */
const obj02 = { name: "tom", age: 18 };
const cloneObj02 = _.cloneWith(obj02, () => {
  return "tom";
});
/* tom */
console.log(cloneObj02);
console.log("----------");

/*
 * 回调函数返回 undefined 时，由方法自己进行克隆，及相当于没有自定义规则；
 * --------------------------------------------------
 */
const obj03 = { name: "tom", age: 18 };
const cloneObj03 = _.cloneWith(obj03, () => {
  return undefined;
});
/* { name: 'tom', age: 18 } */
console.log(cloneObj03);
console.log("----------");
