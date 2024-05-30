import axios from "axios";

export const apiRoot = axios.create({
  baseURL: "https://boardpick-server.store",
});

export const getBoardGameDetail = async (id) => {
  try {
    const { data } = await apiRoot.get(`/api/boardgames/${id}`);
    return data;
  } catch (error) {
    throw error;
  }
};
export const getSimilarBoardGame = async (id) => {
  try {
    const { data } = await apiRoot.get(`/api/boardgames/similar/${id}`);
    return data;
  } catch (error) {
    throw error;
  }
};

export const getMyPick = async (token) => {
  try {
    const { data } = await apiRoot.get(`/api/pick`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      withCredentials: true,
    });
    return data;
  } catch (error) {
    throw error;
  }
};

export const getRecsGame = async () => {
  try {
    const { data } = await apiRoot.get(`/api/boardgames/recs`);
    // console.log(data);
    return data;
  } catch (error) {
    throw error;
  }
};
export const getSuggestGame = async () => {
  try {
    const { data } = await apiRoot.get(`/api/boardgames/suggestion`);
    return data;
  } catch (error) {
    throw error;
  }
};

export const togglePick = async (id, token) => {
  try {
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
  } catch (error) {
    throw error;
  }
};

export const getPickId = async (token) => {
  try {
    const { data } = await apiRoot.get(`/api/pick/get-ids`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      withCredentials: true,
    });
    return data;
  } catch (error) {
    throw error;
  }
};
