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

export const getDuoData = async () => {
  try {
    const { data } = await apiRoot.get(`api/boardgames/list?filter=duo`);
    return data;
  } catch (error) {
    throw error;
  }
};

export const getPlayersData = async () => {
  try {
    const { data } = await apiRoot.get(`api/boardgames/list?filter=players`);
    return data;
  } catch (error) {
    throw error;
  }
};

export const getDifficultyData = async () => {
  try {
    const { data } = await apiRoot.get(`api/boardgames/list?filter=difficulty`);
    return data;
  } catch (error) {
    throw error;
  }
};
