import { flatMap } from "./flat_map";
import "./jest_extensions";
import { iterable } from "./test_helpers";

describe("flatMap", () => {
  test("it maps and then flattens", () => {
    const values = iterable([1, 2]);
    const flatMappedValues = flatMap(values, (e) => [e, e * -1]);
    expect(flatMappedValues).toContainExactly([1, -1, 2, -2]);
  });
});
