import axios from "axios";
import boardGameData from "../../assets/data/boardGameData.json";
const apiRoot = axios.create({
  baseURL: "https://boardpick-server.store",
});

// export const getRankData = async () => {
//   try {
//     const { data } = await apiRoot.get(`/api/boardgames/today-pick`);
//     return data;
//   } catch (error) {
//     throw error;
//   }
// };
export const getRankData = () => {
  return boardGameData;
};
