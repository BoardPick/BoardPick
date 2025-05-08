import axios from "axios";
import boardGameData from "../../assets/data/boardGameData.json";
import { getPickStatus } from "../utils/getPickStatus";

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
    const pickedData = data.map((id) =>
      boardGameData.find((game) => game.id === id)
    );

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
export const getRecsGame = (pickedGameIds) => {
  //pick한 게임이 없을 때 랜덤렌더링
  if (!pickedGameIds || pickedGameIds.length === 0) {
    return boardGameData.sort(() => Math.random() - 0.5).slice(0, 10);
  }

  // Pick한 게임의 id와 일치하는 게임데이터 불러오기
  const pickedGames = boardGameData.filter((game) =>
    pickedGameIds.includes(game.id)
  );

  //pick한 게임 카테고리별 점수 누적표
  const categoryScores = {};
  pickedGames.forEach((game) => {
    game.boardGameCategories.forEach((category) => {
      categoryScores[category] = (categoryScores[category] || 0) + 1;
    });
  });

  // 점수표를 기준으로 나머지 보드게임들의 유사도 점수표
  const scoredGames = boardGameData
    .filter((game) => !pickedGameIds.includes(game.id))
    .map((game) => {
      const score = game.boardGameCategories.reduce(
        (acc, category) => acc + (categoryScores[category] || 0),
        0
      );
      return { ...game, score };
    });
  //계산된 게임 수가 10개 이상일 경우 / 10개 미만일 경우
  const ScoreGameCount = scoredGames.filter((game) => game.score > 0);
  if (ScoreGameCount.length >= 10) {
    scoredGames.sort((a, b) => b.score - a.score);
    let topGames = scoredGames.slice(0, 10);
    return topGames;
  } else {
    return boardGameData.sort(() => Math.random() - 0.5).slice(0, 10);
  }
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
    const { isPicked, pickId } = getPickStatus(id);

    const updatedPicks = isPicked
      ? pickId.filter((pickId) => pickId !== id)
      : [id, ...pickId];

    localStorage.setItem("pick", JSON.stringify(updatedPicks));
    return { picked: !isPicked, updatedPicks };
  } catch (error) {
    throw error;
  }
};
