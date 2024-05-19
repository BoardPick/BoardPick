import axios from "axios";
const apiRoot = axios.create({
  baseURL: "https://boardpick-server.store",
});

export const getRankData = async () => {
  try {
    const { data } = await apiRoot.get(`/api/boardgames/today-pick`);
    return data;
  } catch (error) {
    throw error;
  }
};
