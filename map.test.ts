import { map } from "./map";
import "./jest_extensions";
import { iterable } from "./test_helpers";

describe("map", () => {
  test("it maps values", () => {
    const values = iterable([1, 2, 3, 4]);
    const mappedValues = map(values, (element) => element ** 2);
    expect(mappedValues).toContainExactly([1, 4, 9, 16]);
  });
});
