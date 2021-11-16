export function* flatMap<Input, Output>(
  iterable: Iterable<Input>,
  fn: (element: Input) => Iterable<Output>
) {
  for (const element of iterable) {
    for (const output of fn(element)) {
      yield output;
    }
  }
}
