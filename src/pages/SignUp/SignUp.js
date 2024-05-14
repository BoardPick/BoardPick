import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { QuestionData } from "../../assets/data/QuestionData";
import AppBar from "../../components/AppBar/AppBar";

const SignUp = () => {
  const [questionNo, setQuestionNo] = useState(0);
  const navigate = useNavigate();
  const handleClickAnswer = () => {
    if (QuestionData.length !== questionNo + 1) {
      setQuestionNo(questionNo + 1);
    } else {
    }
  };

  return (
    <div>
      <AppBar />
      <progress
        id="progress"
        value={QuestionData[questionNo].id}
        min="0"
        max="5"
      ></progress>
      <h1>보드픽</h1>
      <div>
        <p>{QuestionData[questionNo].Question}</p>
        <div>{QuestionData[questionNo].Content}</div>
      </div>

      <button onClick={handleClickAnswer}>다음</button>
    </div>
  );
};

export default SignUp;
