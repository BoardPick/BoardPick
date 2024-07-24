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
  const [gameData, setGameData] = useState({});
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
        const boardGameData = await getBoardGameDetail(id);

        setGameData(boardGameData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [id]);
  return { gameData, setGameData, loading, error };
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

export const useSuggestRecsGame = () => {
  const [suggestData, setSuggestData] = useState([]);
  const [recsGameData, setRecsGameData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [suggestData, recsData] = await Promise.all([
          getSuggestGame(),
          getRecsGame(),
        ]);
        setSuggestData(suggestData);
        setRecsGameData(recsData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return { recsGameData, suggestData, loading, error };
};

export const useSimilarGame = (id) => {
  const [similarData, setSimilarData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const similarData = await getSimilarBoardGame(id);
        setSimilarData(similarData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  return { similarData, loading, error };
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
