const solver = require('../src/index');

const samples = {
  '2': [
    [1, -26, 120],
  ],
  '1': [
    [9, -12, 4],
  ],
  '0': [
    [9, 1, 4],
  ],
};

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
