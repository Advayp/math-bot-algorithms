export const GetFunction = (...coefficients) => {
  const Func = (x) => {
    let res = 0;
    let end = coefficients.length - 1;
    for (const coefficient of coefficients) {
      res += Math.pow(x, end) * coefficient;
      end -= 1;
    }
  };

  return Func;
};

export const Factorize = (num) => {
  let factors = [];

  for (let i = 1; i < num + 1; i++) {
    if (num % i == 0) {
      factors.push(i);
    }
  }

  return factors;
};
