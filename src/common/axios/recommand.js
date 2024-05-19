import axios from "axios";
const apiRoot = axios.create({
  baseURL: "http://ec2-13-124-98-35.ap-northeast-2.compute.amazonaws.com",
});

export const getRecommandData = async () => {
  try {
    const { data } = await apiRoot.get(`/api/boardgames/recs`);
    return data;
  } catch (error) {
    throw error;
  }
};
