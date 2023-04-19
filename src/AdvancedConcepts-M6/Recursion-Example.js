// Loop approach

const incrementByOne = (number) => {
  for (let i = number; i < 11; i++) {
    display(i);
  }
};

incrementByOne(1);

// Recursive approach
const incrementByOneRecursive = (number) => {
  if (number == 11) return;
  display(number);
  incrementByOneRecursive(number + 1);
};

incrementByOneRecursive(1);
