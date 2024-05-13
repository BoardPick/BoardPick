import { useDispatch, useSelector } from "react-redux";

import Button from "../Btn/Button/Button";
import StarScore from "../StarScore/StarScore";
import { Like } from "../../assets/icon/icon";

const ReviewContent = ({ nickName, date, review, bottomContent, content }) => {
  const dispatch = useDispatch();
  const likeCount = useSelector((state) => state.likeCount);
  const setLikeCount = () => {
    dispatch({
      type: "SET_LIKE",
    });
  };
  const bottomType = ["game"].includes(bottomContent)
    ? bottomContent
    : "bestKeyword";
  // const setLikeDecrease = () => {
  //   dispatch({
  //     type: "SET_PICK_DECREASE",
  //   });
  // };
  // const setLikeIncrease = () => {
  //   dispatch({
  //     type: "SET_PICK_DECREASE",
  //   });
  // };

  const handleLike = () => {
    setLikeCount(likeCount >= 0 ? likeCount + 1 : likeCount - 1);
  };
  console.log(likeCount);
  return (
    <section className="reviewContent">
      <div className="reviewProfile">
        <span className="profileImg">
          <img src="https://via.placeholder.com/32x32" alt="샘플이미지" />
          <ul className="profileGroup">
            <li>
              <StarScore ver={"black"} />
            </li>
            <li>
              <ul className="name">
                <li>{nickName}</li>
                <li>{date}</li>
              </ul>
            </li>
          </ul>
        </span>
        <Button
          size={"s24"}
          text={
            <>
              <Like />
              {likeCount}
            </>
          }
          onClick={handleLike}
        />
      </div>
      <div className="reviewTxt">{review}</div>
      <article>
        <div className={`bottomContent ${bottomType}`}>{content}</div>
      </article>
    </section>
  );
};

export default ReviewContent;
