export const generateColorByUsername = (username) => {
  // Generate a hash code for the username
  let hash = 0;
  for (let i = 0; i < username.length; i++) {
    hash = username.charCodeAt(i) + ((hash << 5) - hash);
  }

  // Convert the hash code to a positive number
  const positiveHash = Math.abs(hash);

  // Map the hash code to a color within a specific range (e.g., 0-360 for hue)
  const hue = positiveHash % 360;
  const saturation = 50; // You can adjust this value as needed
  const luminosity = 70; // You can adjust this value as needed

  // Return the color in HSL format
  return `hsl(${hue}, ${saturation}%, ${luminosity}%)`;
};