import { zip, isEqual } from "lodash";

declare global {
  namespace jest {
    interface Matchers<R> {
      toContainExactly(expected: Iterable<any>): CustomMatcherResult;
    }
  }
}

expect.extend({
  toContainExactly(received, expected) {
    const receivedArray = Array.from(received);
    const expectedArray = Array.from(expected);

    for (const [receivedElement, expectedElement] of zip(
      receivedArray,
      expectedArray
    )) {
      if (!isEqual(receivedElement, expectedElement)) {
        return {
          message: () =>
            `expected ${receivedArray} to contain ${expectedArray}`,
          pass: false,
        };
      }
    }

    return {
      message: () =>
        `expected ${receivedArray} not to contain ${expectedArray}`,
      pass: true,
    };
  },
});
