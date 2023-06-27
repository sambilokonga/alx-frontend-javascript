/*
 * Using the prototype below, return a promise. The parameter is a boolean
 */
export default function (boolean) {
  return new Promise((resolve, reject) => {
    const object = {
      status: 200,
      body: 'Success',
    };

    if (boolean === true) {
      resolve(object);
    } else {
      reject(Error('The fake API is not working currently'));
    }
  });
}
