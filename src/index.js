const getDiscriminant = (a, b, c) => {
  return b * b - 4 * a * c;
};

const getRoots = (a, b, c) => {
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

// Two different roots
console.log(getRoots(1, -26, 120));
// One root
console.log(getRoots(9, -12, 4));
// No real roots
console.log(getRoots(9, 1, 4));
