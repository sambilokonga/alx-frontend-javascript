/*
 * a function getStudentsByLocation that returns an array of objects who are located in a specific city
 */

export default function getStudentsByLocation(students, city) {
  return students.filter((obj) => obj.location === city);
}
