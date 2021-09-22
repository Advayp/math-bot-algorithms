const _Log = (base, value) => {
  // Change of base rule
  return Math.log10(value) / Math.log10(base);
};

export const ComputeLog = (line) => {
  const parsedLine = _ParseLog(line);

  const [base, value, error] = parsedLine;

  if (error !== null) {
    return error;
  }

  return _Log(base, value);
};

const _ParseLog = (line) => {
  // log(base, value)

  if (!line.startsWith("log(") || !line.endsWith(")")) {
    return [null, null, "Syntax Error\nFormat: log(base, value)"];
  }

  const numberString = line.slice(line.indexOf("(") + 1, line.indexOf(")"));

  const extractedNumbers = numberString.split(",");

  if (extractedNumbers.length != 2) {
    return [
      null,
      null,
      "Incorrect Number Of Arguments.\nFormat: log(base, value)",
    ];
  }

  const numbers = extractedNumbers.map((e, _) => parseFloat(e));

  return [...numbers, null];
};

// console.log(ComputeLog("log(4, 64"));
