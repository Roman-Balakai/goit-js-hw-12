import axios from "axios";

const API_KEY = '47036144-297f640373f03f6ad2279849d';
const BASE_URL = 'https://pixabay.com/api/';

export async function fetchData(query, page, perPage) {
  const params = {
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    page,
    per_page: perPage,
  };
  const response = await axios.get(BASE_URL, { params });
    return response.data;
}