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

module.exports = {getRoots};
