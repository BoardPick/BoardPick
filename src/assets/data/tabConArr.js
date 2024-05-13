import RuleTab from "../../pages/CategoryDetail/GameTab/RuleTab/RuleTab";
import ReviewTab from "../../pages/CategoryDetail/GameTab/ReviewTab/ReviewTab";
import Popular from "../../pages/Review/FilterTab/Popular/Popular";
import New from "../../pages/Review/FilterTab/New/New";

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

export const reviewFilterTab = [
  {
    tabTitle: "🔥 인기",
    tabCont: <Popular />,
  },
  {
    tabTitle: "🆕 최신",
    tabCont: <New />,
  },
];
