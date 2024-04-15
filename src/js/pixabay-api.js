import axios from 'axios';
export async function getPhotos(query, page) {
  const API_KEY = '43345274-6407b89b04ec6e3f08542a7e7';
  const baseUrl = 'https://pixabay.com/api';

  const params = new URLSearchParams({
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'portrait',
    page,
    per_page: 15,
    safesearch: true,
  });

  return await axios.get(`${baseUrl}/?${params}`);
}
