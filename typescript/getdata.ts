const API_KEY: string = "35827533-8bc0f897be4bc0ef4ab3da9be";
const API_URL: string = "https://pixabay.com/api";

export async function getImages(searchParams: Record<string, string>, category: string, order: string, page: number): Promise<any> {
    const response = await fetch(`${URL}/?key=${API_KEY}&${new URLSearchParams(searchParams)}&category=${category}&order=${order}&page=${page}`);
    const images = await response.json();
    return images;
}

export async function getVideos(searchParams: Record<string, string>, category: string, order: string): Promise<any> {
    const response = await fetch(`${URL}/videos/?key=${API_KEY}&${new URLSearchParams(searchParams)}&category=${category}&order=${order}`);
    const videos = await response.json();
    return videos;
}
