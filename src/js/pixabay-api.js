const API_KEY = '47036144-297f640373f03f6ad2279849d';
const BASE_URL = 'https://pixabay.com/api/';

export function fetchData(textName) {
  const params = new URLSearchParams({
    key: API_KEY,
    q: textName,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });
  return fetch(`${BASE_URL}?${params}`).then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  });
}