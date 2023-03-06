const readline = require('readline');
const {stdin: input, stdout: output} = process;

const isNumeric = (n) => {
  return /^-?\d+\.?\d*$/.test(n);
};

const questionnaire = ({rl, query}) => (prompt) => {
  return new Promise((resolve) => {
    rl.question(prompt, async (answer) => {
      if (!isNumeric(answer)) {
        console.error(
          `Error: expected a valid number, got ${answer} instead`,
        );
        await questionnaire({rl, query})(prompt);
      } else {
        query.push(Number(answer));
      }
      resolve();
    });
  });
};

const getQueryInteractive = async () => {
  const query = [];
  const rl = readline.createInterface({input, output});
  const questionNumber = questionnaire({rl, query});
  await questionNumber('a = ');
  await questionNumber('b = ');
  await questionNumber('c = ');
  rl.close();
  return query;
};

module.exports = {getQueryInteractive};
