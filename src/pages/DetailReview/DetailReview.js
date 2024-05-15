import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Rating from "react-rating";
import { FillStar, Star } from "../../assets/icon/icon";

import { goodKeyword, badKeyword } from "../../assets/data/keyword";

import AppBar from "../../components/AppBar/AppBar";
import Button from "../../components/Btn/Button/Button";

const DetailReview = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [keyword, setKeyWord] = useState(false);
  const [value, setValue] = useState(0);
  const [text, setText] = useState("");

  // const handleKeyword = (keyword) => {
  //   if (keyword.includes(keyword)) {
  //     setKeyWord(keyword.filter((kw) => kw !== keyword));
  //   } else {
  //     if (keyword.length < 5) {
  //       setKeyWord([...keyword, keyword]);
  //     }
  //   }
  // };
  const handleRatingChange = (value) => {
    setValue(value);
  };
  const handleChange = (e) => {
    setText(e.target.value);
  };

  const getLabelText = (value) =>
    `${value} Star${value !== 1 ? "s" : ""}, ${value}`;
  return (
    <div className="detailReview">
      <AppBar title={"후기 작성하기"} />
      <section className="detailReviewContent">
        <article className="detailReview_game">
          <h1>
            <span>이스케이프룸 패밀리</span>의<br /> 후기를 작성해볼까요?
          </h1>
          <p className="desc">소중한 플레이 경험을 후기로 남겨주세요!</p>
          <div className="gameInfo">
            <div className="gameThumbNail">
              <img src="https://via.placeholder.com/56x64" alt="샘플이미지" />
            </div>
            <ul>
              <li>
                <h1 className="gameName">이스케이프 룸 패밀리</h1>
              </li>
              <li>
                <p className="desc">
                  방 탈출 게임의 화제작 이스케이프 룸 패밀리
                </p>
              </li>
            </ul>
          </div>
        </article>
        <article className="detailReview_star">
          <h1 className="contentTit">별점 평가</h1>
          <div className="starRating">
            <Rating
              initialRating={value}
              emptySymbol={<Star style={{ fill: "red" }} />}
              fullSymbol={<FillStar />}
              onChange={handleRatingChange}
            />
            <p className="starNum">{value}.0</p>
          </div>
        </article>
        <article className="detailReview_keyword">
          <h1 className="contentTit">
            이런 점이 좋았어요!<span>1개 ~ 5개</span>
          </h1>
          <p className="desc">
            이 보드게임과 어울리는 긍정 키워드를 골라주세요!
          </p>
          <div className="reviewBtns">
            <ul>
              {goodKeyword.slice(0, 5).map((item, i) => (
                <li
                  key={i}
                  className={keyword ? "active" : ""}
                  // onClick={() => handleKeyword(i)}
                >
                  <Button
                    text={
                      <>
                        <span className="emoji">{item.emoji}</span>
                        <span>{item.keyword}</span>
                      </>
                    }
                    size={"s44"}
                  />
                </li>
              ))}
            </ul>
            <ul>
              {goodKeyword.slice(5, goodKeyword.length).map((item, i) => (
                <li
                  key={i}
                  className={keyword ? "active" : ""}
                  // onClick={() => handleKeyword(i)}
                >
                  <Button
                    text={
                      <>
                        <span className="emoji">{item.emoji}</span>
                        <span>{item.keyword}</span>
                      </>
                    }
                    size={"s44"}
                  />
                </li>
              ))}
            </ul>
          </div>
        </article>
        <article className="detailReview_keyword">
          <h1 className="contentTit">
            이런 점이 아쉬워요.<span>1개 ~ 5개</span>
          </h1>
          <p className="desc">
            이 보드게임과 어울리는 부정 키워드를 골라주세요!
          </p>
          <div className="reviewBtns">
            <ul>
              {badKeyword.slice(0, 5).map((item, i) => (
                <li
                  key={i}
                  className={keyword ? "active" : ""}
                  // onClick={() => handleKeyword(i)}
                >
                  <Button
                    text={
                      <>
                        <span className="emoji">{item.emoji}</span>
                        <span>{item.keyword}</span>
                      </>
                    }
                    size={"s44"}
                  />
                </li>
              ))}
            </ul>
            <ul>
              {badKeyword.slice(5, goodKeyword.length).map((item, i) => (
                <li
                  key={i}
                  className={keyword ? "active" : ""}
                  // onClick={() => handleKeyword(i)}
                >
                  <Button
                    text={
                      <>
                        <span className="emoji">{item.emoji}</span>
                        <span>{item.keyword}</span>
                      </>
                    }
                    size={"s44"}
                  />
                </li>
              ))}
            </ul>
          </div>
        </article>
        <article className="detailReview_write">
          <h1 className="contentTit">아직 남기고 싶은 후기가 있어요!</h1>
          <div className="textArea">
            <textarea
              placeholder="추가적으로 남기고 싶은 후기가 있다면 자유롭게 작성해주세요!"
              maxLength="200"
              value={text}
              onChange={handleChange}
            />
            <span className="textLength">{text.length}/200</span>
          </div>
        </article>
        <Button
          type={"brand"}
          size={"s52"}
          text={"작성완료"}
          onClick={() => navigate(`/category/${id}`)}
        />
      </section>
    </div>
  );
};

export default DetailReview;
