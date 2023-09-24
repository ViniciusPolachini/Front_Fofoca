export const geraCorEmTomPastel = () => {
  const randomHue = Math.floor(Math.random() * 360); // Matiz (0-359)
  const randomSaturation = Math.floor(Math.random() * 10) + 40; // Saturação (60-100)
  const randomLuminosity = Math.floor(Math.random() * 20) + 60; // Luminosidade (60-90)

  return `hsl(${randomHue}, ${randomSaturation}%, ${randomLuminosity}%)`;
}