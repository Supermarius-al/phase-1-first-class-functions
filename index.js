function receivesAFunction(callback) {
  callback();
}

callback = () => console.log("Hello there!");

function namedFunction() {
  console.log("Hello there");
}

function returnsANamedFunction() {
  namedFunction();
  return namedFunction;
}

function returnsAnAnonymousFunction() {
  return function () {
    console.log("hello");
  };
}
