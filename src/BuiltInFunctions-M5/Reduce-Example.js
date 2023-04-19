const initialArray = [1, 2, 3, 4, 5];

// 1 * 2 * 3 * 4 * 5
const multiply = initialArray.reduce(
  (accumulator, currentValue) => accumulator * currentValue
);

display(initialArray);
display("Mutiply Reducer Result: " + multiply); // Expected output: 120

const getMax = (a, b) => Math.max(a, b);

// callback is invoked for each element in the array starting at index 0
const max = initialArray.reduce(getMax); // 5

display("Max reducer result: " + max);

//reduce() skips missing elements in sparse arrays, but it does not skip undefined values.

display([1, 2, , 4].reduce((a, b) => a + b)); // 7
display([1, 2, undefined, 4].reduce((a, b) => a + b)); // NaN
