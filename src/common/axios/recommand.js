import axios from "axios";
const apiRoot = axios.create({
  baseURL: "https://boardpick-server.store",
});

export const getRecommandData = async () => {
  try {
    const { data } = await apiRoot.get(`/api/boardgames/recs`);
    return data;
  } catch (error) {
    throw error;
  }
};
