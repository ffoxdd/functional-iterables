import { flatMap } from "./flat_map";
import { map } from "./map";
import { reduce } from "./reduce";

export function cartesianProduct<Input>(
  elementSets: Iterable<Iterable<Input>>
) {
  const elementSets_ = map(elementSets, (elementSet) => {
    return Array.from(map(elementSet, (element) => [element]));
  });

  return reduce<Iterable<Input[]>, Iterable<Input[]>>(elementSets_, (a, b) => {
    return flatMap(a, (a_) => {
      return map(b, (b_) => {
        return [a_, b_].flat();
      });
    });
  });
}
