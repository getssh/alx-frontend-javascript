export default function hasValuesFromArray(set, arr) {
  let new_set = new Set(arr);
  let test = false;

  for (let val of set) {
    for (let val2 of new_set) {
      test = set.has(val2);
    }
  }

  return test;
}
