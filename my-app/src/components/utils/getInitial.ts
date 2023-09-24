export const getFirstCharacterInTheName = (username) => {
  const nameArray = username.split(" ");
  const profileChars = (nameArray[0][0] || '') + (nameArray[1]?.[0] || '');

  return profileChars;
}
