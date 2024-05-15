import RuleTab from "../../pages/CategoryDetail/GameTab/RuleTab/RuleTab";
import ReviewTab from "../../pages/CategoryDetail/GameTab/ReviewTab/ReviewTab";

export const tabContArr = [
  {
    tabTitle: "상세정보",
    tabCont: <RuleTab />,
  },
  {
    tabTitle: "후기",
    tabCont: <ReviewTab />,
  },
];
