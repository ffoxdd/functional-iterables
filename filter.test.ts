import { filter } from "./filter";
import "./jest_extensions";
import { iterable } from "./test_helpers";

describe("filter", () => {
  test("it filters values", () => {
    const values = iterable([1, 2, 3, 4]);
    const filteredValues = filter(values, (element) => element % 2 == 0);
    expect(filteredValues).toContainExactly([2, 4]);
  });
});
