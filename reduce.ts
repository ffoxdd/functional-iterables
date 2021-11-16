export function reduce<Input, Output>(
  iterable: Iterable<Input>,
  fn: (sum: Output, element: Input) => Output,
  accumulator?: Output
) {
  const iterator = iterable[Symbol.iterator]();

  if (accumulator === undefined) {
    accumulator = iterator.next().value;
  }

  return _reduce(iterator, fn, accumulator);
}
function _reduce<Input, Output>(
  input: Iterator<Input>,
  fn: (sum: Output, element: Input) => Output,
  accumulator: Output
) {
  while (true) {
    const { value, done } = input.next();

    if (done) {
      return accumulator;
    }

    accumulator = fn(accumulator, value);
  }
}
