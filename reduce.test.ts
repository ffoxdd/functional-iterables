import { reduce } from "./reduce";
import "./jest_extensions";
import { iterable } from "./test_helpers";

describe("reduce", () => {
  test("it reduces to a single value", () => {
    const values = iterable([1, 2, 3]);
    const reducedValues = reduce(values, (sum, element) => sum + element, 0);
    expect(reducedValues).toEqual(6);
  });

  test("it uses the first element as the initial value when one is not specified", () => {
    const values = iterable([1, 2, 3]);
    const reducedValues = reduce<number, number>(values, (s, e) => s + e);
    expect(reducedValues).toEqual(6);
  });

  test("returns undefined when given an empty iterable", () => {
    const reducedValues = reduce([], (s, e) => s + e);
    expect(reducedValues).toEqual(undefined);
  });
});
