import axios from "axios";

const httpRequest = axios.create({
  baseURL: "https://tiktok.fullstack.edu.vn/api/",
});

export const get = async (url, params = {}) => {
  const response = await httpRequest.get(url, params);
  return response.data;
};

export default httpRequest;
