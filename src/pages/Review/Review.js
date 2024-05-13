import { useNavigate, useParams } from "react-router-dom";
import { Pencil } from "../../assets/icon/icon";

import Button from "../../components/Btn/Button/Button";
import ReviewContent from "../../components/ReviewContent/ReviewContent";

const Review = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  return (
    <div className="reviewAll">
      <h1>게임후기</h1>
      <nav>
        <ul>
          <li>인기</li>
          <li>최신</li>
        </ul>
        <Button
          size={"s36"}
          type={"brand"}
          text={
            <>
              <Pencil className="pencilIcon" /> 후기 작성하기
            </>
          }
          onClick={() => navigate(`/category/${id}/review`)}
        />
      </nav>
      <ReviewContent
        nickName={"나임"}
        date={"2024-05-05"}
        review={"재밋다"}
        bottomContent={"game"}
        content={
          <span>
            <img src="https://via.placeholder.com/32x32" alt="샘플이미지" />
            <ul>
              <li>
                <ul>
                  <li>큐비토스</li>
                  <li>주사위를 굴려 상대방보다 먼저 도착하자!</li>
                </ul>
              </li>
            </ul>
          </span>
        }
      />
    </div>
  );
};

export default Review;
