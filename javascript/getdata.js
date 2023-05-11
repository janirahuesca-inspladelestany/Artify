const API_KEY = "35827533-8bc0f897be4bc0ef4ab3da9be";
const API_URL = "https://pixabay.com/api";

export async function getImages(search, page) {
  const params = new URLSearchParams({
    key: API_KEY,
    q: search,
    per_page: 20, // Especifica 20 resultados por página
    page: page
  });
  const response = await fetch(`${API_URL}/?${params}`);
  const data = await response.json();
  const totalHits = data.totalHits;
  const totalPages = Math.ceil(totalHits / 20); // Redondea hacia arriba para obtener el número entero de páginas
  const images = data.hits;
  return { totalHits, totalPages, images };
}  

export async function getVideos(searchParams, category, order) {
  const response = await fetch(
    `${URL}/videos/?key=${API_KEY}&${new URLSearchParams(
      searchParams
    )}&category=${category}&order=${order}`
  );
  const videos = await response.json();
  return videos;
}
