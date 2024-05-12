import { CategoryMatch } from "../../assets/data/categoryMatch";

const CategoryBanner = ({ genre }) => {
  const matchCategory = CategoryMatch.find(
    (category) => category.genre === genre
  );
  if (!matchCategory) {
    return null;
  }
  return (
    <div className="categoryBadge">
      <img
        className="categoryGenre"
        src={matchCategory.icon}
        alt={`${matchCategory.genre}`}
      />
      <span>{genre}</span>
    </div>
  );
};

export default CategoryBanner;
