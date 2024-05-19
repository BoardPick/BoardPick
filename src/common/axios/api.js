import axios from "axios";

const apiRoot = axios.create({
  baseURL: "http://ec2-13-124-98-35.ap-northeast-2.compute.amazonaws.com",
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
    console.log(data);
    return data;
  } catch (error) {
    throw error;
  }
};

export const togglePick = async () => {
  try {
    const { data } = await apiRoot.post(`/api/pick/1`);
    return data;
  } catch (error) {
    throw error;
  }
};
