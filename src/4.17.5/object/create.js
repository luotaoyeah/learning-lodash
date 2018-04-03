const _ = require("lodash");

/*
 * 创建一个对象，继承给定的原型对象；
 * 可以传递一个可选的属性对象，将这个属性对象的 'own 的'，'enumerable 的'，'属性名是 string 类型的' 属性，复制给新创建的对象；
 * 接收两个参数：'原型对象'，'属性对象'；
 * --------------------------------------------------
 */

function Shape() {
  this.x = 1;
  this.y = 1;
}

function Circle() {
  Shape.call(this);
}

Circle.prototype = _.create(Shape.prototype, {
  name: "tom"
});

const circle = new Circle();

/* true */
console.log(circle instanceof Circle);
/* true */
console.log(circle instanceof Shape);
/* tom */
console.log(circle.name);
/* 1 */
console.log(circle.x);
