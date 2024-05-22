import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Button from "../Btn/Button/Button";

const AlertPopUp = ({ popText, handleLogout }) => {
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  const dispatch = useDispatch();
  const setIsLoggedIn = () => {
    dispatch({ type: "SET_ISLOGGEDIN", payload: !isLoggedIn });
  };
  const handleSubmit = () => {
    setIsLoggedIn(!setIsLoggedIn);
    handleLogout();
  };
  console.log(isLoggedIn);
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
              onClick={handleLogout}
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
