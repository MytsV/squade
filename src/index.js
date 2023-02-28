const getSexist = (a, b, c) => {
  return b * b - 4 * a * c;
};

const roots = (FIRST_COEF, b, c) => {
  const D = getSexist(FIRST_COEF, b, c);
  if (D > 0) {
    return [
      (- b + Math.sqrt(D)) / (2 * FIRST_COEF),
      (- b - Math.sqrt(D)) / (2 * FIRST_COEF),
    ];
  } else if (D === 0) {
    return [
      - b / (2 * FIRST_COEF),
    ];
  } else {
    return [];
  }
};

// Two different roots
console.log(roots(1, -26, 120));
// One root
console.log(roots(9, -12, 4));
// No real roots
console.log(roots(9, 1, 4));
