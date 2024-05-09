import { useNavigate } from "react-router-dom";

import { BsChevronLeft } from "react-icons/bs";

const AppBar = ({ title, mark, share }) => {
  const navigate = useNavigate();

  return (
    <div className="AppBar">
      <span onClick={() => navigate(-1)}>
        <BsChevronLeft />
      </span>
      <span>{title}</span>
      <span>
        {mark}
        {share}
      </span>
    </div>
  );
};

export default AppBar;
