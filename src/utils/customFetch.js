import { BACKEND_HOST, AUTH_TOKEN } from "constants/index.js";

export default function customFetch(endpoint, options = {}) {
  const token = localStorage.getItem(AUTH_TOKEN); /*
  if (!options.headers) options.headers = {};

  options.headers.authorization = `Bearer ${token}`;
  */

  return fetch(`${BACKEND_HOST}${endpoint}`, options);
}
