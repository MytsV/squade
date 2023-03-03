const readline = require('readline');
const {stdin: input, stdout: output} = process;

const getRoots = (a, b, c) => {
  if (a === 0) {
    throw Error('The equation is not quadratic');
  }
  const discriminant =  b * b - 4 * a * c;
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

const isNumber = (n) => {
  return !isNaN(n) && isFinite(n);
};

const getQueryInteractive = async () => {
  const query = [];
  const rl = readline.createInterface({input, output});
  const questionNumber = (prompt) => {
    return new Promise((resolve) => {
      rl.question(prompt, async (answer) => {
        const answerParsed = parseFloat(answer);
        if (!isNumber(answerParsed)) {
          console.error(
              `Error: expected a valid number, got ${answer} instead`,
          );
          await questionNumber(prompt);
        } else {
          query.push(answerParsed);
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
    throw Error('Not implemented yet!');
  } else {
    query = await getQueryInteractive();
  }
  displayEquation(...query);
  const roots = getRoots(...query);
  displayRoots(roots);
};

solve();

module.exports = {getRoots};
