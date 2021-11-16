import { cartesianProduct } from "./cartesian_product";
import "./jest_extensions";
import { iterable } from "./test_helpers";

describe("cartesianProduct", () => {
  test("it generates the cartesian product of the input sets", () => {
    const values = iterable([
      [1, 2],
      [3, 4],
    ]);

    const productValues = cartesianProduct(values);

    expect(productValues).toContainExactly([
      [1, 3],
      [1, 4],
      [2, 3],
      [2, 4],
    ]);
  });

  test("it works with a single set", () => {
    const values = iterable([[1, 2, 3]]);
    const productValues = cartesianProduct(values);
    expect(productValues).toContainExactly([[1], [2], [3]]);
  });

  test("works with degenerate input", () => {
    expect(cartesianProduct([])).toEqual(undefined);
  });
});
