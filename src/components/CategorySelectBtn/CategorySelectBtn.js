import { CategoryMatch } from "../../assets/data/categoryMatch.js";
import { useNavigate } from "react-router-dom";

const CategorySelectBtn = ({ genre, type }) => {
  const navigate = useNavigate();

  const matchCategory = CategoryMatch.find(
    (category) => category.genre === genre
  );
  if (!matchCategory) {
    return null;
  }

  return (
    <div className={type === "select" ? "dark" : "none"} onClick={() => {navigate(`/category/select/${genre}`)}}>
      <img
        src={matchCategory.icon}
        alt={`${matchCategory.genre}`}
      />
      <div className="genre">{genre}</div>
    </div>
  );
};

export default CategorySelectBtn;
