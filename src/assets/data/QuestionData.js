import DetailReview from "../../pages/DetailReview/DetailReview";
import Question1 from "../../pages/SignUp/Question/Question1/Question1";

export const QuestionData = [
  {
    id: 1,
    Question: "보드픽에서 사용하실 닉네임을 입력해주세요!",
    Content: <Question1 />,
  },
  {
    id: 2,
    Question: "평소 보드게임을 얼마나 자주 플레이하나요?",
  },
  {
    id: 3,
    Question: "보드게임 플레이 시 어떤 카테고리를 가장 선호하시나요?",
  },
  {
    id: 4,
    Question: "가장 재미있게 플레이해 본 보드게임은 무엇인가요?",
  },
  {
    id: 5,
    Question: <DetailReview />,
  },
];
