import axios from "axios";
const apiRoot = axios.create({
  baseURL: "https://boardpick-server.store",
});

export const getCategorySelect = async (name) => {
  try {
    const { data } = await apiRoot.get(`/api/boardgames?category=${encodeURIComponent(name)}`);
    return data;
  } catch (error) {
    throw error;
  }
};
