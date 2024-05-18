import { CategoryMatch } from "../../assets/data/categoryMatch";

const CategoryTab = ({ genre }) => {
  const matchCategory = CategoryMatch.find(
    (category) => category.genre === genre
  );
  if (!matchCategory) {
    return null;
  }
  return (
    <div className="categoryTab">
      <img
        src={matchCategory.icon}
        alt={`${matchCategory.genre}`}
      />
      <div className="genre">{genre}</div>
    </div>
  );
};

export default CategoryTab;
