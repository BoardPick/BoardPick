import { useSelector } from "react-redux";
import AppBar from "../../components/AppBar/AppBar";
import ThumbNail from "../../components/ThumbNail/ThumbNail";

const MyPickAll = () => {
  const myPick = useSelector((state) => state.myPick);

  return (
    <div className="myPickAll">
      <AppBar title={"MY PICK"} />
      <article className="pickContainer">
        <p className="myPickCount">
          <span>{myPick.length}개</span>의 보드게임
        </p>
        <div className="picks">
          <ThumbNail type={"big"} />
          <ThumbNail type={"big"} />
          <ThumbNail type={"big"} />
          <ThumbNail type={"big"} />
          <ThumbNail type={"big"} />
          <ThumbNail type={"big"} />
        </div>
      </article>
    </div>
  );
};

export default MyPickAll;
