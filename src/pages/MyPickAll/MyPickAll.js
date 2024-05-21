import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import AppBar from "../../components/AppBar/AppBar";
import ThumbNail from "../../components/ThumbNail/ThumbNail";
import { getMyPick, getRecsGame } from "../../common/axios/api";
import Loading from "../../components/Search/SearchResult/Loading/Loading";

const MyPickAll = () => {
  const navigate = useNavigate();
  const myPick = useSelector((state) => state.myPick);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const data = await getMyPick();
  //       setData(data);
  //       setLoading(false);
  //     } catch (err) {
  //       setError(err.message);
  //       setLoading(false);
  //     }
  //   };
  //   fetchData();
  // }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getRecsGame();
        setData(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };
    fetchData();
  }, []); // my pick 데이터 연결 시 수정 예정

  if (loading) return <Loading />;

  return (
    <div className="myPickAll">
      <AppBar title={"MY PICK"} />
      <article className="pickContainer">
        <p className="myPickCount">
          {myPick && (
            <div>
              <span>{data.length}개</span>의 보드게임
            </div>
          )}
        </p>
        {data && data.length !== 0 && (
          <div className="picks">
            {data.map((game, index) => (
              <ThumbNail
                id={game.id}
                img={game.imageUrl}
                name={game.name}
                info={game.description}
                tags={game.tags}
                key={index}
                onClick={() => navigate(`/category/${game.id}`)}
                type="big"
              />
            ))}
          </div>
        )}
      </article>
    </div>
  );
};

export default MyPickAll;
