import { BACKEND_HOST, AUTH_TOKEN, AUTH_HEADER_KEY } from "constants/index.js";

export default function customFetch(endpoint, options = {}) {
  const token = localStorage.getItem(AUTH_TOKEN); 

  if (!options.headers) options.headers = {};

  if(token) {
    options.headers[AUTH_HEADER_KEY] = token
  }

  return fetch(`${BACKEND_HOST}${endpoint}`, options);
}
