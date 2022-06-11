import axios from 'axios';
// Tạo instane axios

console.log(process.env.REACT_APP_BASE_URL);
const httpRequest = axios.create({
  baseURL: 'https://tiktok.fullstack.edu.vn/api/',
});

export const get = async (path, options = {}) => {
  const response = await httpRequest.get(path, options);
  return response.data;
};

export default httpRequest;

// môi trường :
// Local / development
// Test / Staging
// UAT
// Production
