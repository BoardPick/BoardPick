import { useState, useEffect } from "react";
import { useFetch } from "./useFetch";
import {
  getBoardGameDetail,
  getPickId,
  getSimilarBoardGame,
  getSuggestGame,
  getRecsGame,
  getMyPick,
} from "../axios/api";

export const useBoardGame = (fetchFunction) => {
  return useFetch(fetchFunction);
};

export const useBoardGameData = (id) => {
  return useFetch(() => getBoardGameDetail(id), [id]);
};

// export const usePickId = (token) => {
//   return useFetch(() => getPickId(token), []);
// };
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

export const useSuggestGame = () => {
  return useFetch(getSuggestGame);
};

export const useRecsGame = () => {
  return useFetch(getRecsGame);
};

export const useSimilarData = (id) => {
  return useFetch(() => getSimilarBoardGame(id), [id]);
};

export const useMyPick = async () => {
  const [myPickData, setMyPickData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      console.error("No token found");
      return;
    }
    const fetchPickData = async () => {
      try {
        const myPickData = await getMyPick(token);
        setMyPickData(myPickData);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };
    fetchPickData();
  }, [myPickData]);
  return { myPickData, setMyPickData, loading, error };
};
