import axios from "axios";
import boardGameData from "../../assets/data/boardGameData.json";

const apiRoot = axios.create({
  baseURL: "https://boardpick-server.store",
});

// export const getRecommandData = async () => {
//   try {
//     const { data } = await apiRoot.get(`/api/boardgames/recs`);
//     return data;
//   } catch (error) {
//     throw error;
//   }
// };
export const getRecommandData = () => {
  return [...boardGameData].sort(() => Math.random() - 0.5);
};

// export const getDuoData = async () => {
//   try {
//     const { data } = await apiRoot.get(`api/boardgames/list?filter=duo`);
//     return data;
//   } catch (error) {
//     throw error;
//   }
// };
export const getDuoData = () => {
  return boardGameData.filter((game) => game.minPlayers === 2);
};

// export const getPlayersData = async () => {
//   try {
//     const { data } = await apiRoot.get(`api/boardgames/list?filter=players`);
//     return data;
//   } catch (error) {
//     throw error;
//   }
// };
export const getPlayersData = () => {
  return boardGameData.filter((game) => game.maxPlayers > 2);
};

// export const getDifficultyData = async () => {
//   try {
//     const { data } = await apiRoot.get(`api/boardgames/list?filter=difficulty`);
//     return data;
//   } catch (error) {
//     throw error;
//   }
// };
export const getDifficultyData = () => {
  return boardGameData.filter(
    (game) => game.difficulty === "초보" || game.difficulty === "왕초보"
  );
};
