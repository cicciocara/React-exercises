export function Sum({ numbers }) {
  const sum = numbers.reduce((prev, current) => prev + current, 0);
  return <h1>Somma: {sum}</h1>;
}
