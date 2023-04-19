const words = [
  "Courses",
  "Rating",
  "Pluralsight",
  "JavaScript",
  "Functional Programming",
];

const isWordGreaterThanSeven = (word) => word.length > 7;

const result = words.filter(isWordGreaterThanSeven);

display(words);
display(result);
