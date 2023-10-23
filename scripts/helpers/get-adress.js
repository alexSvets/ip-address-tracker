export async function getAdress(ip = "8.8.8.8") {
  const response = await fetch(
    `https://geo.ipify.org/api/v2/country,city?apiKey=at_p01a9XrAcvXeCXdxw5RENkTp0a9kU&ipAddress=${ip}`
  );
  return await response.json();
}
