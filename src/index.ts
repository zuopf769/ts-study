class Parent {
  house() {}
}
class Child extends Parent {
  car() {}
}
class Grandson extends Child {
  sleep() {}
}

function fn(callback: (instance: Child) => Child) {
  let r = callback(new Child()); // 你要的我都用，兼容
  // instance = new Child();
  // instance = new Grandson()
}

class A {}
class B extends A {}

let a: A = new B();

fn((instance: Parent) => {
  return new Grandson();
});

function fn1(callback: (a: string | number) => boolean | string) {
  callback("string");
  callback(123);
}

fn1((a: boolean | string | number) => {
  return "abc";
});

type Arg<T> = (arg: T) => void;

type xx = Arg<boolean | string | number> extends Arg<string | number>
  ? true
  : false;
