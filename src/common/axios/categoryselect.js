import axios from "axios";
const apiRoot = axios.create({
  baseURL: "https://boardpick-server.store",
});

export const getCategorySelect = async (genre) => {
  try {
    const { data } = await apiRoot.get(`/api/boardgames?category=${genre}`);
    return data;
  } catch (error) {
    throw error;
  }
};
