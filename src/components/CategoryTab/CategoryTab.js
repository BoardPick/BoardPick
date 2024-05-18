import { CategoryMatch } from "../../assets/data/categoryMatch";

const CategoryTab = ({ genre, type }) => {
  const matchCategory = CategoryMatch.find(
    (category) => category.genre === genre
  );
  if (!matchCategory) {
    return null;
  }
  return (
    <div className={type === "select" ? "dark" : "none"}>
      <img
        src={matchCategory.icon}
        alt={`${matchCategory.genre}`}
      />
      <div className="genre">{genre}</div>
    </div>
  );
};

export default CategoryTab;
