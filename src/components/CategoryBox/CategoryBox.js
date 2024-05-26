import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
// import { setCategory } from "../../redux/actions.js";
// import { SearchContext } from "../../context/SearchContext.js";
import {
  Strategy,
  Rollplaying,
  Cardgame,
  Cooperation,
  Deduction,
  Batting,
  Mafia,
  Memory,
  Realtime,
  Etc,
} from "../../assets/icon/category/category.js";

const CategoryBox = () => {
  const navigate = useNavigate();
  // const url = "/category/categoryselect";
  // const data = useContext(SearchContext);
  // const selectCategory = useSelector((state) => state.selectCategory);
  // const dispatch = useDispatch();

  const category1 = [
    { icon: <Strategy />, text: "전략게임", url: "/categoryselect/전략게임" },
    { icon: <Rollplaying />, text: "롤플레잉", url: "/categoryselect/롤플레잉" },
    { icon: <Cardgame />, text: "카드게임", url: "/categoryselect/카드게임" },
    { icon: <Cooperation />, text: "협력게임", url: "/categoryselect/협력게임" },
    { icon: <Deduction />, text: "추리게임", url: "/categoryselect/추리게임" },
  ];

  const category2 = [
    { icon: <Batting />, text: "배팅게임", url: "/categoryselect/배팅게임" },
    { icon: <Mafia />, text: "마피아", url: "/categoryselect/마피아" },
    { icon: <Memory />, text: "기억력", url: "/categoryselect/기억력" },
    { icon: <Realtime />, text: "순발력", url: "/categoryselect/순발력" },
    { icon: <Etc />, text: "기타게임", url: "/categoryselect/기타게임" },
  ];

  const handleCategoryClick = (url) => {
    // data.setSelectCategory(genre);
    // dispatch(setCategory(genre));
    navigate(url);
  };

  return (
    <div className="categorybox">
      <ul>
          {category1.map((tab) => (
            <li
              key={tab.text}
              className="category" onClick={() => handleCategoryClick(tab.text)}
            >
              <span className="categoryIcon">{tab.icon}</span>
              <span className="categoryName">{tab.text}</span>
            </li>
          ))}
        </ul>
      <ul>
        {category2.map((tab) => (
          <li
            key={tab.text}
            className="category" onClick={() => handleCategoryClick(tab.url)}
          >
            <span className="categoryIcon">{tab.icon}</span>
            <span className="categoryName">{tab.text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryBox;
