import { useState, useEffect } from "react";
import { useFetch } from "./useFetch";
import {
  getBoardGameDetail,
  getPickId,
  getSimilarBoardGame,
  getSuggestGame,
  getRecsGame,
  getMyPick,
  getLogInfo,
} from "../axios/api";

export const useBoardGame = (fetchFunction) => {
  return useFetch(fetchFunction);
};

// export const useLogData = () => {
//   return useFetch(() => getLogInfo);
// };

export const useBoardGameData = (id) => {
  return useFetch(() => getBoardGameDetail(id), [id]);
};

export const useSuggestGame = () => {
  return useFetch(getSuggestGame);
};

export const useRecsGame = () => {
  return useFetch(getRecsGame);
};

export const useSimilarData = (id) => {
  return useFetch(() => getSimilarBoardGame(id), [id]);
};
export const useSimilarDataPick = (id) => {
  return useFetch(() => getSimilarBoardGame(id), [id]);
};

export const useMyPick = () => {
  return useFetch(getMyPick, []);
};

export const usePickId = () => {
  const [pickId, setPickId] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          console.error("No token found");
          setLoading(false);
          return;
        }
        const pickIdData = await getPickId(token);

        setPickId(pickIdData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [pickId]);
  return { pickId, loading, error };
};
