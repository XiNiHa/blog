type Falsy = false | null | undefined | 0 | "";

export function isTruthyEntry<T>(
  entry: [string, T] | [string, Exclude<T, Falsy>],
): entry is [string, Exclude<T, Falsy>] {
  return !!entry[1];
}
