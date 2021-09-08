const CoefficientsToEquation = (coefficients) => {
  let currentPower = coefficients.length - 1;

  let res = "";

  for (const coefficient of coefficients) {
    const coefficientString = coefficient == 1 ? "" : coefficient;
    const powerString =
      currentPower != 0
        ? `x${currentPower == 1 ? "" : `^${currentPower}`}`
        : "";
    res += `${coefficientString}${powerString}`;
    if (currentPower != 0) {
      res += " + ";
    }
    currentPower--;
  }

  return res;
};

const AddPolynomials = (coefficientsOne, coefficientsTwo) => {
  const coefficientsOneReversed = coefficientsOne.reverse();
  const coefficientsTwoReversed = coefficientsTwo.reverse();

  const shorterLength =
    coefficientsOne.length >= coefficientsTwo.length
      ? coefficientsTwo.length
      : coefficientsOne.length;

  let res = [];

  console.log(shorterLength);

  for (let i = 0; i < shorterLength; i++) {
    res.push(coefficientsOneReversed[i] + coefficientsTwoReversed[i]);
  }

  const unmatchedLikeTerms = coefficientsOneReversed.slice(shorterLength);

  res = [...unmatchedLikeTerms.reverse(), ...res.reverse()];
  console.log(res);

  return CoefficientsToEquation(res);
};

const SubtractPolynomials = (coefficientsOne, coefficientsTwo) => {
  const coefficientsOneReversed = coefficientsOne.reverse();
  const coefficientsTwoReversed = coefficientsTwo.reverse();

  const shorterLength =
    coefficientsOne.length >= coefficientsTwo.length
      ? coefficientsTwo.length
      : coefficientsOne.length;

  let res = [];

  console.log(shorterLength);

  for (let i = 0; i < shorterLength; i++) {
    res.push(coefficientsOneReversed[i] - coefficientsTwoReversed[i]);
  }

  const unmatchedLikeTerms = coefficientsOneReversed.slice(shorterLength);

  res = [...unmatchedLikeTerms.reverse(), ...res.reverse()];
  console.log(res);

  return CoefficientsToEquation(res);
};
// console.log(CoefficientsToEquation([2, 4, 1, -2, -3]));
console.log(AddPolynomials([5, 3, 1, 2, 3], [3, 3, 4]));
console.log(SubtractPolynomials([5, 3, 1, 2, 3], [3, 3, 4]));
