export function* flatten<Input>(iterables: Iterable<Iterable<Input>>) {
  for (const iterable of iterables) {
    for (const element of iterable) {
      yield element;
    }
  }
}
