// Outer function
const welcomeAuthor = () => {
  let name = "Adhithi";

  // Inner function
  const authorName = () => "Welcome" + " " + name;

  // Return inner function
  return authorName;
};

const a = welcomeAuthor();
display(a());

// Track number of clicks on button
const updateClickCounter = () => {
  var counter = 0;

  // inner function
  const incrementCounter = () => counter++;

  // return inner function
  return incrementCounter;
};

const counterResults = updateClickCounter();
display(counterResults());
display(counterResults());
display(counterResults());
display(counterResults());
display(counterResults());
display(counterResults());
