import axios from "axios";
const apiRoot = axios.create({
  baseURL: "http://ec2-13-124-98-35.ap-northeast-2.compute.amazonaws.com",
});

export const getBoardGameDetail = async (id) => {
  try {
    const { data } = await apiRoot.get(`/api/boardgames/${id}`);
    console.log(data);
    return data;
  } catch (error) {
    throw error;
  }
};
