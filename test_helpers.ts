export function iterable<T>(values: T[]) {
  return values[Symbol.iterator]();
}
