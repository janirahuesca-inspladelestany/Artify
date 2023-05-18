const API_KEY = "35827533-8bc0f897be4bc0ef4ab3da9be";
const API_URL = "https://pixabay.com/api";

export async function getImages(search, page) {
  const params = new URLSearchParams({
    key: API_KEY,
    q: search,
    per_page: 20, // Especifica 20 resultats per pàgina
    page: page
  });
  const response = await fetch(`${API_URL}/?${params}`);
  const data = await response.json();
  const totalHits = data.totalHits;
  const totalPages = Math.ceil(totalHits / 20); // Arrodoneix cap a dalt per a obtenir el número enter de pàgines
  const images = data.hits;
  return { totalHits, totalPages, images };
}  

export async function getVideos(search, page) {
  const params = new URLSearchParams({
    key: API_KEY,
    q: search,
    per_page: 20, // Especifica 20 resultats per pàgina
    page: page
  });
  const response = await fetch(`${API_URL}/videos?${params}`);
  const data = await response.json();
  const totalHits = data.totalHits;
  const totalPages = Math.ceil(totalHits / 20); // Arrodoneix cap a dalt per a obtenir el número enter de pàgines
  const videos = data.hits;
  return { totalHits, totalPages, videos };
}