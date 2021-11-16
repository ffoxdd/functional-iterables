export function* map<Input, Output>(
  iterable: Iterable<Input>,
  fn: (element: Input) => Output
) {
  for (const element of iterable) {
    yield fn(element);
  }
}
