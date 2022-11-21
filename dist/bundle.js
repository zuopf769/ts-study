(function () {
  'use strict';

  var __extends = (undefined && undefined.__extends) || (function () {
      var extendStatics = function (d, b) {
          extendStatics = Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
              function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
          return extendStatics(d, b);
      };
      return function (d, b) {
          if (typeof b !== "function" && b !== null)
              throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
          extendStatics(d, b);
          function __() { this.constructor = d; }
          d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
  })();
  var Parent = /** @class */ (function () {
      function Parent() {
      }
      Parent.prototype.house = function () { };
      return Parent;
  }());
  var Child = /** @class */ (function (_super) {
      __extends(Child, _super);
      function Child() {
          return _super !== null && _super.apply(this, arguments) || this;
      }
      Child.prototype.car = function () { };
      return Child;
  }(Parent));
  var Grandson = /** @class */ (function (_super) {
      __extends(Grandson, _super);
      function Grandson() {
          return _super !== null && _super.apply(this, arguments) || this;
      }
      Grandson.prototype.sleep = function () { };
      return Grandson;
  }(Child));
  function fn(callback) {
      callback(new Child()); // 你要的我都用，兼容
      // instance = new Child();
      // instance = new Grandson()
  }
  var A = /** @class */ (function () {
      function A() {
      }
      return A;
  }());
  var B = /** @class */ (function (_super) {
      __extends(B, _super);
      function B() {
          return _super !== null && _super.apply(this, arguments) || this;
      }
      return B;
  }(A));
  new B();
  fn(function (instance) {
      return new Grandson();
  });
  function fn1(callback) {
      callback("string");
      callback(123);
  }
  fn1(function (a) {
      return "abc";
  });

})();
//# sourceMappingURL=bundle.js.map
