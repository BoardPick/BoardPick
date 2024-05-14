import { useState } from "react";
import { useSelector } from "react-redux";

import { QuestionData } from "../../assets/data/QuestionData";
import AppBar from "../../components/AppBar/AppBar";
import Button from "../../components/Btn/Button/Button";

const SignUp = () => {
  const [questionNo, setQuestionNo] = useState(0);

  const disabled = useSelector((state) => state.disabled);

  const handleClickAnswer = () => {
    if (QuestionData.length !== questionNo + 1) {
      setQuestionNo(questionNo + 1);
    } else {
    }
  };

  return (
    <div className="signUp">
      <AppBar />
      <progress
        id="progress"
        value={QuestionData[questionNo].id}
        min="0"
        max="5"
      ></progress>
      <div className="signUpQuestion">
        {QuestionData[questionNo].Question}
        <div className="choose">{QuestionData[questionNo].Content}</div>
      </div>
      <div className="nextBtn">
        {disabled ? (
          <Button type="disabled" text={"다음"}>
            다음
          </Button>
        ) : (
          <Button type="brand" text={"다음"} onClick={handleClickAnswer}>
            다음
          </Button>
        )}
      </div>
    </div>
  );
};

export default SignUp;
