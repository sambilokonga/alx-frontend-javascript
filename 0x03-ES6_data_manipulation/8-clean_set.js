/*
 * function named cleanSet that returns a string of all the set values that start with a specific string (startString).
 * It accepts two arguments: a set (Set) and a startString (String)
 */

export default function cleanSet(set, startString) {
  const list = [];

  if (
    typeof set !== 'object'
    || typeof startString !== 'string'
    || startString.length === 0
  ) {
    return '';
  }

  for (const item of set) {
    if (item && item.startsWith(startString)) {
      list.push(item.slice(startString.length));
    }
  }

  return list.join('-');
}
