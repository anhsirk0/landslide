function range(
  length: number,
  start: number = 0,
  step: number = 1,
): Array<number> {
  return Array.from({ length }, (_, i) => start + i * step);
}

export default range;
