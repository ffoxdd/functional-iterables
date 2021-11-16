export function* filter<Input>(
  iterable: Iterable<Input>,
  fn: (element: Input) => boolean
) {
  for (const element of iterable) {
    if (fn(element)) {
      yield element;
    }
  }
}
