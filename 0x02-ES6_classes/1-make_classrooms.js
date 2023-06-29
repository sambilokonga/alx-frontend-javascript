/*
 * Import the ClassRoom class from 0-classroom.js.
 * Implement a function named initializeRooms
 */

import ClassRoom from './0-classroom';

export default function initializeRooms() {
  return [
    new ClassRoom(19),
    new ClassRoom(20),
    new ClassRoom(34),
  ];
}
