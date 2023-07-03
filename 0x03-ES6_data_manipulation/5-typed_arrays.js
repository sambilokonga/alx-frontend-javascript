/*
 * a function named createInt8TypedArray that returns a new ArrayBuffer with an Int8 value at a specific position
 */

export default function createInt8TypedArray(length, position, value) {
  const arr = new ArrayBuffer(length);
  const val = new DataView(arr);

  try {
    val.setInt8(position, value);
  } catch (e) {
    throw Error('Position outside range');
  }
  return val;
}
