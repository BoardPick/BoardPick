import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import AppBar from "../../components/AppBar/AppBar";
import ThumbNail from "../../components/ThumbNail/ThumbNail";
import { getMyPick } from "../../common/axios/api";

const MyPickAll = () => {
  const myPick = useSelector((state) => state.myPick);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getMyPick();
        setData(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="myPickAll">
      <AppBar title={"MY PICK"} />
      <article className="pickContainer">
        <p className="myPickCount">
          <span>{myPick.length}개</span>의 보드게임
        </p>
        <div className="picks">
          {data.length !== 0 ? (
            data.map((game, index) => (
              <ThumbNail key={index} type={"big"} game={game} />
            ))
          ) : (
            <div className="noPick">현재 등록된 PICK이 없어요!</div>
          )}
        </div>
      </article>
    </div>
  );
};

export default MyPickAll;
