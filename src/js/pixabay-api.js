export function getPhotos(query) {
  const API_KEY = '43345274-6407b89b04ec6e3f08542a7e7';
  const baseUrl = 'https://pixabay.com/api';

  const params = new URLSearchParams({
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'portrait',
    safesearch: true,
  });

  return fetch(`${baseUrl}/?${params}`).then(res => {
    if (!res.ok) {
      throw new Error(res.status);
    }
    return res.json();
  });
}
