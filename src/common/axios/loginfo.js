import axios from "axios";
const apiRoot = axios.create({
  baseURL: "https://boardpick-server.store",
});

export const getLogInfo = async () => {
  try {
    const { data } = await apiRoot.get(`/api/user`);
    return data;
  } catch (error) {
    throw error;
  }
};
