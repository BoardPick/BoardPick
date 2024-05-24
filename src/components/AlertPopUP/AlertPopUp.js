import React from "react";
import Button from "../Btn/Button/Button";

const AlertPopUp = ({ popText, handleCancel, handleSubmit }) => {
  return (
    <div className="alertPopup">
      <section className="overlay">
        <article>
          <p>{popText}</p>
        </article>
        <ul>
          <li className="cancel">
            <Button
              text={"취소"}
              type={"disabled"}
              size={"s48"}
              onClick={handleCancel}
            />
          </li>
          <li>
            <Button
              text={"확인"}
              type={"brand"}
              size={"s48"}
              onClick={handleSubmit}
            />
          </li>
        </ul>
      </section>
    </div>
  );
};

export default AlertPopUp;
