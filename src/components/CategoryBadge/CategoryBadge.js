import { CategoryMatch } from "../../assets/data/categoryMatch";

const CategoryBanner = ({ genre, myPick }) => {
  const matchCategory = CategoryMatch.find(
    (category) => category.genre === genre
  );
  if (!matchCategory) {
    return null;
  }
  return (
    <span className={`categoryBadge ${myPick ? "myPick" : ""}`}>
      <img src={matchCategory.icon} alt={matchCategory.genre} />
      <span>{genre}</span>
    </span>
  );
};

export default CategoryBanner;
