const solver = require('../src/index');
const samples = require('./samples.json');

const testRootCount = () => {
  for (const [rootCount, queries] of Object.entries(samples)) {
    const fails = queries.filter((query) => {
      const result = solver.getRoots(...query);
      return result.length !== +rootCount;
    });
    if (fails.length !== 0) {
      console.error('Root count differs for following queries:');
      fails.forEach((query) => console.error(query));
      process.exit(1);
    }
  }
};

const precision = 1e-6;
const testValidity = () => {
  let fails = [];
  const queries = Object.values(samples).flat();
  for (const query of queries) {
    const roots = solver.getRoots(...query);
    roots.forEach((root) => {
      const result = query[0] * root * root + query[1] * root + query[2];
      if (Math.abs(result - 0) > precision) {
        fails.push(query);
      }
    });
  }
  if (fails.length !== 0) {
    console.error('Roots are invalid for following queries:');
    fails.forEach((query) => console.error(query));
    process.exit(1);
  }
}

testRootCount();
testValidity();
