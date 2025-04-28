import axios from "axios";
import boardGameData from "../../assets/data/boardGameData.json";

export const apiRoot = axios.create({
  baseURL: "https://boardpick-server.store",
});

//API용
// export const getBoardGameDetail = async (id) => {
//   try {
//     const { data } = await apiRoot.get(`/api/boardgames/${id}`);
//     return data;
//   } catch (error) {
//     throw error;
//   }
// };

//json용
export const getBoardGameDetail = (id) => {
  const data = boardGameData.find((item) => item.id === Number(id));
  return data;
};

// export const getSimilarBoardGame = async (id) => {
//   try {
//     const { data } = await apiRoot.get(`/api/boardgames/similar/${id}`);
//     return data;
//   } catch (error) {
//     throw error;
//   }
// };

export const getSimilarBoardGame = (categories, id) => {
  const filterData = boardGameData.filter(
    (game) =>
      game.id !== Number(id) &&
      game.boardGameCategories.some((category) => categories.includes(category))
  );

  const sortedData = filterData
    .map((game) => ({
      ...game,
      matchingCount: game.boardGameCategories.filter((category) =>
        categories.includes(category)
      ).length,
    }))
    .sort((a, b) => b.matchingCount - a.matchingCount);
  return sortedData;
};

export const getMyPick = async (token) => {
  try {
    // const { data } = await apiRoot.get(`/api/pick`, {
    //   headers: {
    //     Authorization: `Bearer ${token}`,
    //   },
    //   withCredentials: true,
    // });
    const data = JSON.parse(localStorage.getItem("pick")) || [];
    const pickedData = boardGameData.filter((game) => data.includes(game.id));

    return pickedData;
  } catch (error) {
    throw error;
  }
};

// export const getRecsGame = async () => {
//   try {
//     const { data } = await apiRoot.get(`/api/boardgames/recs`);
//     // console.log(data);
//     return data;
//   } catch (error) {
//     throw error;
//   }
// };
export const getRecsGame = () => {
  return [...boardGameData].sort(() => Math.random() - 0.5);
};

// export const getSuggestGame = async () => {
//   try {
//     const { data } = await apiRoot.get(`/api/boardgames/suggestion`);
//     return data;
//   } catch (error) {
//     throw error;
//   }
// };
export const getSuggestGame = () => {
  return boardGameData;
};

export const togglePick = async (id, token) => {
  try {
    // const { data } = await apiRoot.post(
    //   `/api/pick/${id}`,
    //   { id },
    //   {
    //     headers: {
    //       Authorization: `Bearer ${token}`,
    //     },
    //     withCredentials: true,
    //   }
    // );
    const picks = JSON.parse(localStorage.getItem("pick")) || [];

    const isPicked = picks.includes(id);

    let updatedPicks;
    if (isPicked) {
      updatedPicks = picks.filter((pickId) => pickId !== id);
    } else {
      updatedPicks = [id, ...picks];
    }

    localStorage.setItem("pick", JSON.stringify(updatedPicks));
    return updatedPicks;
  } catch (error) {
    throw error;
  }
};
