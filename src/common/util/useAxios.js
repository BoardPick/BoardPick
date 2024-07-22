import { useState, useEffect } from "react";
import {
  getBoardGameDetail,
  getPickId,
  getSimilarBoardGame,
  getSuggestGame,
  getRecsGame,
  getMyPick,
} from "../axios/api";

export const useBoardGameData = (id) => {
  const [data, setData] = useState({});
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
        const [boardGameData, pickIdData] = await Promise.all([
          getBoardGameDetail(id),
          getPickId(token),
        ]);
        setData(boardGameData);
        setPickId(pickIdData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [id]);
  return { data, setData, pickId, loading, error };
};

export const useSimilarData = async (id) => {
  const [similarData, setSimilarData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const getSimilarData = async () => {
      if (!id) return;
      try {
        const similarData = await getSimilarBoardGame(id);
        setSimilarData(similarData);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };
    getSimilarData();
  }, [id]);
  return { similarData, loading, error };
};

export const useRecommendSuggest = async () => {
  const [suggestData, setSuggestData] = useState([]);
  const [recsGameData, setRecsGameData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [suggestData, recsGameData] = await Promise.all([
          getRecsGame(),
          getSuggestGame(),
        ]);
        setRecsGameData(recsGameData);
        setSuggestData(suggestData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  return { suggestData, recsGameData, loading, error };
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
  }, []);
  return { myPickData, loading, error };
};
