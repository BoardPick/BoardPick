import { useState } from "react";

const Question1 = () => {
  const [value, setValue] = useState("");
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={handleChange}
        minLength={2}
        maxLength={8}
        placeholder="닉네임을 입력해주세요."
      />
      <p>공백없이 2자 이상 8글자 이내로 입력해주세요.</p>
    </div>
  );
};

export default Question1;
