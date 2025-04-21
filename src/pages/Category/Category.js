import { useContext } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import SearchBar from "../../components/Search/SearchBar/SearchBar.js";
import OnSearch from "../../components/Search/OnSearch/OnSearch.js";
import CategoryBox from "../../components/CategoryBox/CategoryBox.js";
import Button from "../../components/Btn/Button/Button.js";
import { SearchContext } from "../../context/SearchContext.js";

const Category = () => {
  const navigate = useNavigate();
  const onSearch = useSelector((state) => state.onSearch);
  const log = useContext(SearchContext);

  const tags = [
    { url: "/category/17", name: "#어스" },
    { url: "/category/10", name: "#테라포밍마스" },
    { url: "/category/9", name: "#글룸헤이븐" },
    { url: "/category/1", name: "#메이지나이트" },
    { url: "/category/3", name: "#광기의 저택" },
    { url: "/category/20", name: "#스플렌더" },
    { url: "/category/2", name: "#아컴 호러: 카드게임" },
    { url: "/category/5", name: "#투 매니 본즈" },
    { url: "/category/14", name: "#7 원더스 대결" },
    { url: "/category/18", name: "#스컬킹" },
  ];

  return (
    <div className="Categorys">
      <SearchBar />
      {onSearch ? (
        <OnSearch />
      ) : (
        <div className="wrapper">
          <CategoryBox />
          <div className="HotTag">
            <h1 className="title">가장 핫한 보드게임</h1>
            <div className="tags">
              {tags.map((tag, i) => {
                return (
                  <div className="tag" key={i}>
                    <Button
                      key={i}
                      text={tag.name}
                      size={"s36"}
                      type={"default"}
                      onClick={() => navigate(tag.url)}
                    ></Button>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Category;
