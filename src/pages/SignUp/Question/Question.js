import { useEffect, useState, useCallback } from "react";

import Button from "../../../components/Btn/Button/Button";
import { CategoryMatch } from "../../../assets/data/categoryMatch";

import { useDispatch, useSelector } from "react-redux";

// Question1
export const Question1 = () => {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();
  const disabled = useSelector((state) => state.disabled);
  const setDisabled = () => {
    dispatch({ type: "SET_DISABLED", payload: !disabled });
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  // useEffect(() => {
  //   setDisabled(!(valueLength >= 2 && valueLength <= 8));
  // }, [valueLength]);

  // console.log(valueLength);
  // console.log(disabled);

  const deleteBtn = () => {
    setInputValue("");
    setDisabled(true);
  };

  return (
    <>
      <div className="inputBox">
        <input
          className="nickNameInp"
          id="nickNameInp"
          type="text"
          value={inputValue}
          onChange={(e) => handleChange(e)}
          minLength={2}
          maxLength={8}
          placeholder="닉네임을 입력해주세요."
        />
        {inputValue.length > 0 && (
          <button className="closeBtn" onClick={deleteBtn} />
        )}
      </div>
      <p className="caption">공백없이 2자 이상 8글자 이내로 입력해주세요.</p>
    </>
  );
};

//Question2
export const Question2 = () => {
  const dispatch = useDispatch();
  const disabled = useSelector((state) => state.disabled);
  const setDisabled = () => {
    dispatch({ type: "SET_DISABLED", payload: !disabled });
  };
  const [selectedValue, setSelectedValue] = useState("");

  const handleChange = (e) => {
    setSelectedValue(e.target.value);
    setDisabled(false);
  };
  return (
    <div className="question2">
      <label>
        <input type="radio" name="turn" value={1} onChange={handleChange} />
        일주일에 3~4회 이상
      </label>
      <label>
        <input type="radio" name="turn" value={2} onChange={handleChange} />
        일주일에 1~2회
      </label>
      <label>
        <input type="radio" name="turn" value={3} onChange={handleChange} />
        한달에 1~2회
      </label>
      <label>
        <input type="radio" name="turn" value={4} onChange={handleChange} />
        아주 가끔
      </label>
      <label>
        <input type="radio" name="turn" value={5} onChange={handleChange} />
        경험 없음
      </label>
    </div>
  );
};

//Question3
export const Question3 = () => {
  return (
    <div>
      {CategoryMatch.map((genre, i) => (
        <Button
          key={i}
          text={
            <>
              <img src={genre.icon} />
              <p>{genre.genre}</p>
            </>
          }
        />
      ))}
    </div>
  );
};
