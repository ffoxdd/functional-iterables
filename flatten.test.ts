import { flatten } from "./flatten";
import "./jest_extensions";
import { iterable } from "./test_helpers";

describe("flatten", () => {
  test("it flattens", () => {
    const values = iterable([iterable([1, 2]), iterable([3, 4])]);
    const flattenedValues = flatten(values);
    expect(flattenedValues).toContainExactly([1, 2, 3, 4]);
  });
});
