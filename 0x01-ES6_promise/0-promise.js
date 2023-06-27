/*
 * Return a Promise using this prototype function getResponseFromAPI()
 */
export default function getResponseFromAPI() {
  const success = true;
  return new Promise((resolve, reject) => {
    if (success) {
      resolve();
    } else {
      reject();
    }
  });
}
