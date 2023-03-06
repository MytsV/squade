const path = require('path');
const fs = require('fs');

const getQueryFromFile = (file) => {
  let buffer;
  try {
    buffer = fs.readFileSync(path.resolve(file));
  } catch (e) {
    console.error(`File ${file} does not exist or is corrupted`);
    process.exit(1);
  }
  const format = /^(-?\d+\.?\d*)\s(-?\d+\.?\d*)\s(-?\d+\.?\d*)\n$/;
  if (!format.test(buffer.toString())) {
    console.error(`File format is invalid`);
    process.exit(1);
  }
  const data = format.exec(buffer);
  return [data[1], data[2], data[3]].map(Number);
};

module.exports = {getQueryFromFile};
