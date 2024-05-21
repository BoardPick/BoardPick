import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { SearchContext } from "./context/SearchContext";
import { useState, useEffect } from "react";
import { getLogInfo } from "./common/axios/loginfo";

import "./App.scss";
import OnBoarding from "./pages/OnBoarding/OnBoarding";
import Home from "./pages/Home/Home";
import Category from "./pages/Category/Category";
import CategorySelect from "./pages/CategorySelect/CategorySelect";
import CategoryDetail from "./pages/CategoryDetail/CategoryDetail";
import MyPick from "./pages/MyPick/MyPick";
import MyPickAll from "./pages/MyPickAll/MyPickAll";
import MyPage from "./pages/MyPage/MyPage";
import SearchResult from "./pages/SearchResult/SearchResult";
import NavigationBar from "./layouts/NavigationBar/NavigationBar";
import Loading from "./components/Search/SearchResult/Loading/Loading";

function App() {
  const location = useLocation();
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  const [searchKeyWord, setSearchKeyWord] = useState("");
  const [selectCategory, setSelectCategory] = useState("none");

  // 로그인 api 호출
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [LogData, setLogData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const LogData = await getLogInfo();
        setLogData(LogData);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchData();
  }, [isLoggedIn]);

  // const isLoggedIn = userData && (userData.id || userData.code) ? true : false;

  return (
    <SearchContext.Provider
      value={{
        searchKeyWord,
        setSearchKeyWord,
        selectCategory,
        setSelectCategory,
      }}
    >
      <div className="App">
        <div className="boardPick">
          <Routes>
            <Route path="/onBoarding" element={<OnBoarding />} />
            <Route path="/" element={<Home />} />
            <Route path="/category" element={<Category />} />
            <Route
              path="/category/categoryselect"
              element={<CategorySelect selectCategory={selectCategory} />}
            />
            <Route path="/category/:id" element={<CategoryDetail />} />
            <Route path="/myPick" element={<MyPick />} />
            <Route path="/myPick/all" element={<MyPickAll />} />
            <Route
              path="/myPage"
              element={<MyPage LogData={LogData} />}
              LogData={LogData}
            />
            <Route path="/search" element={<SearchResult />} />
          </Routes>
          {location.pathname !== "/onBoarding" && <NavigationBar />}
        </div>
      </div>
    </SearchContext.Provider>
  );
}

export default App;
