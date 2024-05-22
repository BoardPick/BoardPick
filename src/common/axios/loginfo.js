import axios from "axios";
const apiRoot = axios.create({
  baseURL: "https://boardpick-server.store",
});

export const getLogInfo = async (token) => {
  try {
    const { data } = await apiRoot.get(
      `/api/user`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        withCredentials: true,
      }
    );
    return data;
  } catch (error) {
    throw error;
  }
};
