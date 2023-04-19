const add = (n1, n2) => n1 + n2;

const subtract = (n1, n2) => n1 - n2;

const multiply = (n1, n2) => n1 * n2;

// Higher Order Function
const compute = (mathOperation, initialValue, values) => {
  let total = initialValue;

  values.forEach((value) => {
    total = mathOperation(total, value);
  });

  return total;
};

display(compute(add, 0, [2, 4]));
display(compute(subtract, 10, [5, 2]));
display(compute(multiply, 1, [2, 4]));
