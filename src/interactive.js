const readline = require('readline');
const {stdin: input, stdout: output} = process;

const isNumeric = (n) => {
  return /^-?\d+\.?\d*$/.test(n);
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

module.exports = {getQueryInteractive};
