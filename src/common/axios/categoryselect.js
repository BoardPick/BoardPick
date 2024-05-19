import axios from "axios";
const apiRoot = axios.create({
  baseURL: "http://ec2-13-124-98-35.ap-northeast-2.compute.amazonaws.com",
});

export const getCategorySelect = async (genre) => {
  try {
    const { data } = await apiRoot.get(`/api/boardgames?category=${genre}`);
    return data;
  } catch (error) {
    throw error;
  }
};
