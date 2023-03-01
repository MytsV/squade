const readline = require('readline');
const {stdin: input, stdout: output} = process;

const getDiscriminant = (a, b, c) => {
  return b * b - 4 * a * c;
};

const getRoots = (a, b, c) => {
  if (a === 0) {
    throw Error('The equation is not quadratic');
  }
  const discriminant = getDiscriminant(a, b, c);
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

const solve = async () => {
  let query;
  if (process.argv.length > 2) {
    throw Error('Not implemented yet!');
  } else {
    query = await getQueryInteractive();
  }
  console.log(query);
};

solve();

module.exports = {getRoots};
