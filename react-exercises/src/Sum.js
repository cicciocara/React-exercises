export function Sum({ numbers }) {
  const sum = numbers.reduce((prev, current) => prev + current, 0);
  return <h1>Somma: {sum}</h1>;
}

Sum.defaultProps = {
  numbers: [1, 2, 3, 4, 15],
};
