import axios from "axios";

const baseURL = "https://boardpick-server.store";

export const apiRoot = axios.create({
  baseURL: baseURL,
});

export const getBoardGameDetail = async (id) => {
  const boardGameDetail = await apiRoot.get(`/api/boardgames/${id}`);
  return boardGameDetail.data;
};
export const getRecsGame = async () => {
  const { data } = await apiRoot.get(`/api/boardgames/recs`);
  return data;
};
export const getSuggestGame = async () => {
  const { data } = await apiRoot.get(`/api/boardgames/suggestion`);
  return data;
};

export const getSimilarBoardGame = async (id) => {
  const similarGame = await apiRoot.get(`/api/boardgames/similar/${id}`);
  return similarGame.data;
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

export const getPickId = async (token) => {
  const pickId = await apiRoot.get(`/api/pick/get-ids`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    withCredentials: true,
  });
  return pickId.data;
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
