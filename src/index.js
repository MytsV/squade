const getRoots = require('./roots').getRoots;
const getQueryInteractive = require('./interactive').getQueryInteractive;
const getQueryFromFile = require('./noninteractive').getQueryFromFile;

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
