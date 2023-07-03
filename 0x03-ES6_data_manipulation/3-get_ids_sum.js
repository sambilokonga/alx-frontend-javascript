/*
 * a function getStudentIdsSum that returns the sum of all the student ids.
 * It should accept a list of students (from getListStudents) as a parameter
 */

export default function getStudentIdsSum(students) {
  return students.reduce((acc, c) => acc + c.id, 0);
}
