import axios from "axios";

const apiRoot = axios.create({
  baseURL: "https://boardpick-server.store",
});

export const getBoardGameDetail = async (id) => {
  try {
    const { data } = await apiRoot.get(`/api/boardgames/${id}`);
    return data;
  } catch (error) {
    throw error;
  }
};

export const getMyPick = async () => {
  try {
    const { data } = await apiRoot.get(`/api/pick`);
    console.log(data);
    return data;
  } catch (error) {
    throw error;
  }
};

export const getRecsGame = async () => {
  try {
    const { data } = await apiRoot.get(`/api/boardgames/recs`);
    // console.log(data);
    return data;
  } catch (error) {
    throw error;
  }
};

export const togglePick = async (id) => {
  try {
    const { data } = await apiRoot.post(`/api/pick/${id}`, {});
    return data;
  } catch (error) {
    throw error;
  }
};
