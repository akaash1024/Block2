function outerFunction() {
  const message = "Hello from the closure!";

  // Inner function forms a closure over `message`
  return function innerFunction() {
    console.log(message);
  };
}

// Invoke outerFunction and store the returned inner function
const myClosure = outerFunction();

// Now call the stored function
myClosure(); // Output: Hello from the closure!
