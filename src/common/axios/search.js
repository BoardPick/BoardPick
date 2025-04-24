import axios from "axios";
import boardGameData from "../../assets/data/boardGameData.json";
const apiRoot = axios.create({
  baseURL: "https://boardpick-server.store",
});

// export const getSearchResult = async (keyword) => {
//   try {
//     const { data } = await apiRoot.get(`/api/boardgames/search?keyword=${keyword}`);
//     return data;
//   } catch (error) {
//     throw error;
//   }
// };

export const getSearchResult = (keyword) => {
  const data = boardGameData.filter((item) => item.name.includes(keyword));
  return data;
};
