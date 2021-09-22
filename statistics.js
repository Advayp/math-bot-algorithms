const Mean = (dataSet = "") => {
  const numbersString = dataSet.split(",");
  const numbers = numbersString.map((element, _) => {
    return parseFloat(element);
  });

  console.log(numbers);

  let sum = 0;

  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }

  return sum / numbers.length;
};

console.log(Mean("1, 2, 3, 4"));
