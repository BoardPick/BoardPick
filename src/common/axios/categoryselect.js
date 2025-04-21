import axios from "axios";
import boardGameData from "../../assets/data/boardGameData.json";

const apiRoot = axios.create({
  baseURL: "https://boardpick-server.store",
});

// export const getCategorySelect = async (name) => {
//   try {
//     const { data } = await apiRoot.get(`/api/boardgames?category=${name}`);
//     return data;
//   } catch (error) {
//     throw error;
//   }
// };

export const getCategorySelect = (name) => {
  return boardGameData.filter((game) =>
    game.boardGameCategories.includes(name)
  );
};
