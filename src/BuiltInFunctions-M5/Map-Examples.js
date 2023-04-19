const initialNumbers = [1, 2, 3, 4, 5];

const addTwo = (number) => number + 2;

const newNumbers = initialNumbers.map(addTwo);

//const newNumbers = initialNumbers.map((number) => number + 2);

display("Initial Numbers: " + initialNumbers);
display("New Numbers: " + newNumbers);
