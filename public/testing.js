class Testing {
  hello() {
    console.log("Hello");
    return "Hello";
  }

  world() {
    console.log("World");
    return "World";
  }

  sum(a, b) {
    console.log(a + b);
    return a + b;
  }
}

window.Testing = Testing;
