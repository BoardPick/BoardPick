import { CategoryMatch } from "../../assets/data/categoryMatch";
import { SearchContext } from "../../context/SearchContext.js";
import { useContext } from "react";


const CategoryTab = ({ genre, type }) => {
  const log = useContext(SearchContext);

  const matchCategory = CategoryMatch.find(
    (category) => category.genre === genre
  );
  if (!matchCategory) {
    return null;
  }

  const onClick = () => {
    console.log(genre);
    // log.setSelectCategory(genre);
  }

  return (
    <div className={type === "select" ? "dark" : "none"} onClick={onClick()}>
      <img
        src={matchCategory.icon}
        alt={`${matchCategory.genre}`}
      />
      <div className="genre">{genre}</div>
    </div>
  );
};

export default CategoryTab;
