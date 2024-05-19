import axios from "axios";
const apiRoot = axios.create({
  baseURL: "https://boardpick-server.store",
});

export const getSearchResult = async (keyword) => {
  try {
    const { data } = await apiRoot.get(`/api/boardgames/search?keyword=${keyword}`);
    return data;
  } catch (error) {
    throw error;
  }
};
