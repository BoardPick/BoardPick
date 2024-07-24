import GameSlide from "../../components/GameSlide/GameSlide";

const RecommendGame = ({
  myPickData,
  logData,
  similarData,
  selectedPick,
  recsGameData,
}) => {
  return myPickData.length === 0 ? (
    <GameSlide
      classNameBox={"recommendGame"}
      classNameTit={"contentTit"}
      title={
        <span>
          <strong>'{logData ? logData.nickname : "사용자"}'</strong>
          님을 위한 추천 보드게임
        </span>
      }
      games={recsGameData}
    />
  ) : (
    <GameSlide
      classNameBox={"recommendGame"}
      classNameTit={"contentTit"}
      title={
        <span>
          <strong>#{selectedPick?.name}</strong>과 비슷한 보드게임
        </span>
      }
      games={similarData}
    />
  );
};

export default RecommendGame;
