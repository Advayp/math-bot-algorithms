const GetNumbers = (dataSet = "") => {
  const numberString = dataSet.split(",");
  const numbers = numberString.map((element, _) => parseFloat(element));

  return numbers;
};

export const Mean = (dataSet = "") => {
  const numbers = GetNumbers(dataSet);

  let sum = 0;

  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }

  return sum / numbers.length;
};

export const Median = (dataSet = "") => {
  const numbers = GetNumbers(dataSet);
  numbers.sort();
  const length = numbers.length;

  if (length % 2 === 0) {
    return Mean(`${numbers[length / 2 - 1]}, ${numbers[length / 2]}`);
  }

  return numbers[Math.floor(length / 2)];
};

console.log(Mean("1, 2, 3, 4"));
console.log(Median("6, 5, 4, 2, 7, 3, 1"));
