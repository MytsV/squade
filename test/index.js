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
    }
  }
};

testRootCount();
