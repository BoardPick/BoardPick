import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import AppBar from "../../components/AppBar/AppBar";
import { profile_brand, profile_blue } from "../../assets/image/image";
import Button from "../../components/Btn/Button/Button";
import { useNavigate } from "react-router-dom";

const MyPageEdit = () => {
  const navigate = useNavigate();
  const [image, setImage] = useState(null);

  const [inputNick, setInputNick] = useState("보드픽");
  // const inputNick = useSelector((state) => state.inputNick);
  // const dispatch = useDispatch();
  // const setInputNick = () => {
  //   dispatch({ type: "SET_INPUT_NICK", payload: inputNick });
  // };

  const [disabled, setDisabled] = useState(false);
  const handleChange = (e) => {
    setInputNick(e.target.value);
    setDisabled(!(inputNick.length >= 2 && inputNick.length < 8));
  };
  const deleteBtn = () => {
    setInputNick("");
    setDisabled(true);
  };
  const onChangeImage = (e) => {
    const file = e.target.file[0];
    const imgUrl = URL.createObjectURL(file);
    setImage(imgUrl);
  };

  console.log(disabled);
  console.log(inputNick.length);
  return (
    <div className="MyPageEdit">
      <AppBar title={"내 정보 수정"} />
      <section>
        <article className="profileImage">
          {image ? <img src={profile_brand} /> : <img src={profile_blue} />}
          {/* <input type="file" onChange={onChangeImage} /> */}
        </article>
        <article className="nickNameEdit">
          <div className="inputBox">
            <input
              className="nickNameInp"
              id="nickNameInp"
              type="text"
              value={inputNick}
              onChange={(e) => handleChange(e)}
              minLength={2}
              maxLength={8}
              placeholder="닉네임을 입력해주세요."
            />
            {inputNick.length > 0 && (
              <button className="closeBtn" onClick={deleteBtn} />
            )}
          </div>
          <p className={`caption ${disabled ? "pass" : ""}`}>
            공백없이 2자 이상 8글자 이내로 입력해주세요.
          </p>
        </article>
      </section>
      <article className="editBtn">
        {disabled ? (
          <Button text={"수정완료"} type={"disabled"} size={"s52"} />
        ) : (
          <Button
            text={"수정완료"}
            type={"brand"}
            size={"s52"}
            onClick={() => navigate("/myPage")}
          />
        )}
      </article>
    </div>
  );
};

export default MyPageEdit;
