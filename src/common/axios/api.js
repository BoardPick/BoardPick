import axios from "axios";
import boardGameData from "../../assets/data/boardGameData.json";

const baseURL = "https://boardpick-server.store";

export const apiRoot = axios.create({
  baseURL: baseURL,
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
export const getSimilarBoardGame = (id) => {
  const data = boardGameData.find((item) => item.id === Number(id));
  return data;
};

export const getLogInfo = async (token) => {
  const { data } = await apiRoot.get(`/api/user`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    withCredentials: true,
  });
  return data;
};
export const getMyPick = async (token) => {
  const { data } = await apiRoot.get(`/api/pick`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    withCredentials: true,
  });
  return data;
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
  return boardGameData;
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
  const { data } = await apiRoot.post(
    `/api/pick/${id}`,
    { id },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      withCredentials: true,
    }
  );
  return data;
};
