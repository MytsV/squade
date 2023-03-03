const readline = require('readline');
const {stdin: input, stdout: output} = process;
const path = require('path');
const fs = require('fs');

const getRoots = (a, b, c) => {
  if (a === 0) {
    throw Error('The equation is not quadratic');
  }
  const discriminant = b * b - 4 * a * c;
  if (discriminant > 0) {
    return [
      (- b + Math.sqrt(discriminant)) / 2 / a,
      (- b - Math.sqrt(discriminant)) / 2 / a,
    ];
  } else if (discriminant === 0) {
    return [
      - b / 2 / a,
    ];
  } else {
    return [];
  }
};

const isNumeric = (n) => {
  return /^\d*\.?\d*$/.test(n);
};

const getQueryInteractive = async () => {
  const query = [];
  const rl = readline.createInterface({input, output});
  const questionNumber = (prompt) => {
    return new Promise((resolve) => {
      rl.question(prompt, async (answer) => {
        if (!isNumeric(answer)) {
          console.error(
              `Error: expected a valid number, got ${answer} instead`,
          );
          await questionNumber(prompt);
        } else {
          query.push(Number(answer));
        }
        resolve();
      });
    });
  };
  await questionNumber('a = ');
  await questionNumber('b = ');
  await questionNumber('c = ');
  rl.close();
  return query;
};

const getQueryFromFile = (file) => {
  let buffer;
  try {
    buffer = fs.readFileSync(path.resolve(file));
  } catch (e) {
    console.error(`File ${file} does not exist or is corrupted`);
    process.exit(1);
  }
  const format = /^(\d*\.?\d*)\s(\d*\.?\d*)\s(\d*\.?\d*)\n$/;
  if (!format.test(buffer.toString())) {
    console.error(`File format is invalid`);
    process.exit(1);
  }
  const data = format.exec(buffer);
  return [data[1], data[2], data[3]].map(Number);
};

const displayEquation = (a, b, c) => {
  console.log(`Equation: (${a}) x^2 + (${b}) x + (${c})`);
};

const displayRoots = (roots) => {
  if (roots.length === 0) {
    console.log('There are no real roots.');
  } else {
    console.log(`There are ${roots.length} root(s):`);
    roots.forEach((root, index) => {
      console.log(`x${index + 1} = ${root}`);
    });
  }
};

const solve = async () => {
  let query;
  if (process.argv.length > 2) {
    query = getQueryFromFile(process.argv[2]);
  } else {
    query = await getQueryInteractive();
  }
  let roots;
  try {
    roots = getRoots(...query);
  } catch (e) {
    console.error(e.toString());
    process.exit(1);
  }
  displayEquation(...query);
  displayRoots(roots);
};

solve();

module.exports = {getRoots};
