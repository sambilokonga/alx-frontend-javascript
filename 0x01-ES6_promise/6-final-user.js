const handleProfileSignup = async (firstName, lastName, fileName) => {
  const promises = [signUpUser(firstName, lastName), uploadPhoto(fileName)];

  const results = await Promise.allSettled(promises);

  return results.map((result) => ({
    status: result.status,
    value: result.status === 'fulfilled' ? result.value : result.reason,
  }));
};

export default handleProfileSignup;
