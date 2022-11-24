var __extends =
  (this && this.__extends) ||
  (function () {
    var extendStatics = function (d, b) {
      extendStatics =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (d, b) {
            d.__proto__ = b;
          }) ||
        function (d, b) {
          for (var p in b)
            if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
      return extendStatics(d, b);
    };
    return function (d, b) {
      if (typeof b !== "function" && b !== null)
        throw new TypeError(
          "Class extends value " + String(b) + " is not a constructor or null"
        );
      extendStatics(d, b);
      function __() {
        this.constructor = d;
      }
      d.prototype =
        b === null
          ? Object.create(b)
          : ((__.prototype = b.prototype), new __());
    };
  })();
var Animal = /** @class */ (function () {
  function Animal() {
    this.age = 10;
    this.identity = "lll";
  }
  Animal.prototype.sayHi = function () {
    console.log("Grrr", this.age);
  };
  return Animal;
})();
var Dog = /** @class */ (function (_super) {
  __extends(Dog, _super);
  function Dog() {
    return _super.call(this) || this;
  }
  Dog.prototype.sayHi = function () {
    this.identity;
  };
  return Dog;
})(Animal);
var myAnimal = new Animal();
myAnimal.sayHi();
var myDog = new Dog();
