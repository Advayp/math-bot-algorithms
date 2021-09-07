import { GetFunction, Factorize } from "./utils";

const FindRootsWell = (...coefficients) => {
  let a = Factorize(coefficients[0]);
  let b = Factorize(coefficients[coefficients.length - 1])

  let possibleRoots = [];
  let actualRoots = []

  const func = GetFunction(coefficients);

  for (const item of a) {
    possibleRoots.push({factor: item, factors: b});
  }

  for (const possibleRoot of possibleRoots) {
    for (const i in possibleRoot.factors) {
      if (func(i / possibleRoot.factor) == 0) {
        actualRoots.push(i / possibleRoot.factor)
      }
      else if (func(-i / possibleRoot.factor) == 0) {
        actualRoots.push(-i / possibleRoot.factor)
      }
    }
  }
}

const FindRootsFast = (...coefficients, start = -10, end = -10, step = 1) => {
  const Func = GetFunction(...coefficients)
  
  let res = []

  for (let i = 0; i < coefficients.length; i++) {
    if (Func(i) == 0) {
      res.push(i)
    }
  }

  return res
};


export default FindRootsFast;
export default FindRootsWell;