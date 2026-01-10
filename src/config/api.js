let API_BASE_URL = process.env.REACT_APP_API_URL || "https://think-indiaa.vercel.app";

// Remove trailing slash if present
if (API_BASE_URL.endsWith('/')) {
  API_BASE_URL = API_BASE_URL.slice(0, -1);
}

console.log("API_BASE_URL:", API_BASE_URL);

export default API_BASE_URL;
