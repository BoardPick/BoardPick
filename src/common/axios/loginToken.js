import React from "react";
import Loading from "../../components/Search/SearchResult/Loading/Loading";
import { useNavigate } from "react-router-dom";

const loginToken = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get("token");
    console.log(token);
    localStorage.setItem("token", token);
    navigate("/");
  }, []);
  return (
    <div>
      <Loading />
    </div>
  );
};

export default loginToken;
