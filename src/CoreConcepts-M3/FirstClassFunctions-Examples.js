// Assign a function to a variable

const topic = (t) => `You are learning ${t}`;

display(topic("First class functions"));

// Pass a function as an argument

const numbers = [1, 2, 3, 4];
const multiplyTwo = (number) => number * 2;

const timesTwo = numbers.map(multiplyTwo);

display(timesTwo);

// Return a function from another function

const firstClassFunction = () => () =>
  display("Hi! I am a function returned from another function");

let displayFunction = firstClassFunction();
displayFunction();
