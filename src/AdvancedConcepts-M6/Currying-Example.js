const sendMessage = (greeting) => (name) => (message) =>
  `${greeting} ${name} ${message}`;

display(sendMessage("Hello")("Adhithi")("You are learning Currying"));

const add = (a) => (b) => (c) => a + b + c;

display(add(5)(10)(20));
