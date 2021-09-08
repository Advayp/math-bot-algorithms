// Returns a function which describes a polynomial
// based on coefficients.
// For example, 1, -2, -3 => x^2 - 2x - 3
export const GetFunction = (coefficients) => {
  const Func = (x) => {
    let res = 0;
    let end = coefficients.length - 1;
    for (const coefficient of coefficients) {
      res += Math.pow(x, end) * coefficient;
      end -= 1;
    }

    return res;
  };

  return Func;
};

/**
 * @param  {The number to factor} num
 * @returns {The factors of a number}
 */
export const Factorize = (num) => {
  let factors = [];

  for (let i = 1; i < num + 1; i++) {
    if (num % i == 0) {
      factors.push(i);
    }
  }

  return factors;
};

// Finds all rational roots using the
// rational root theorem
export const FindRootsWell = (coefficients) => {
  let a = Factorize(coefficients[0]);
  let b = Factorize(coefficients[coefficients.length - 1]);

  let possibleRoots = [];
  let actualRoots = [];

  const func = GetFunction(coefficients);

  for (const item of a) {
    possibleRoots.push({ factor: item, factors: b });
  }

  for (const possibleRoot of possibleRoots) {
    for (const i in possibleRoot.factors) {
      if (func(i / possibleRoot.factor) == 0) {
        actualRoots.push(i / possibleRoot.factor);
      } else if (func(-i / possibleRoot.factor) == 0) {
        actualRoots.push(-i / possibleRoot.factor);
      }
    }
  }
};

// Finds roots by looping through a start and end point
// Usually much faster than FindRootsWell
export const FindRootsFast = (
  coefficients,
  start = -10,
  end = 10,
  step = 1
) => {
  const Func = GetFunction(coefficients);

  let res = [];
  for (let i = start; i < end; i += step) {
    console.log(Func(i));
    if (Func(i) == 0) {
      res.push(i);
    }
  }

  return res;
};

console.log(FindRootsFast([1, -2, -3]));
