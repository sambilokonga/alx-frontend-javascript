// utils.js

// Simulated asynchronous function to upload a photo
export function uploadPhoto() {
  return new Promise((resolve, reject) => {
    // Simulating a delay with setTimeout
    setTimeout(() => {
      const photoData = { body: 'profile-1' };
      resolve(photoData);
    }, 2000); // Simulating a 2-second delay
  });
}

// Simulated asynchronous function to create a user
export function createUser() {
  return new Promise((resolve, reject) => {
    // Simulating a delay with setTimeout
    setTimeout(() => {
      const userData = {
        firstName: 'Guillaume',
        lastName: 'Salva'
      };
      resolve(userData);
    }, 1500); // Simulating a 1.5-second delay
  });
}
