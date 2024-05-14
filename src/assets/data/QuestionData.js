import DetailReview from "../../pages/DetailReview/DetailReview";
import {
  Question1,
  Question2,
  Question3,
} from "../../pages/SignUp/Question/Question";

export const QuestionData = [
  {
    id: 1,
    Question: (
      <h1 className="question">
        보드픽에서 사용하실
        <br /> 닉네임을 입력해주세요!
      </h1>
    ),
    Content: <Question1 />,
  },
  {
    id: 2,
    Question: (
      <h1 className="question">
        평소 보드게임을
        <br /> 얼마나 자주 플레이하나요?
      </h1>
    ),
    Content: <Question2 />,
  },
  {
    id: 3,
    Question: (
      <h1 className="question">
        보드게임 플레이 시<br /> 어떤 카테고리를 가장 선호하시나요?
      </h1>
    ),
    Content: <Question3 />,
  },
  {
    id: 4,
    Question: (
      <h1 className="question">
        가장 재미있게 플레이해 본<br />
        보드게임은 무엇인가요?
      </h1>
    ),
  },
  {
    id: 5,
    Question: <DetailReview />,
  },
];
