import {
  Routes,
  Route,
  useLocation,
  Navigate,
  useNavigate,
} from "react-router-dom";
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
  const navigate = useNavigate();
  const location = useLocation();
  const [searchKeyWord, setSearchKeyWord] = useState("");
  const [selectCategory, setSelectCategory] = useState("none");

  // 로그인 api 호출
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [logData, setLogData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const logData = await getLogInfo();
        setLogData(logData);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get("token");
    if (token) {
      localStorage.setItem("token", token);
      // console.log(token);
      navigate("/");
    }
  }, []);

  // const isLoggedIn =
  //   logData &&
  //   logData.userData &&
  //   (logData.userData.id || logData.userData.code)
  //     ? true
  //     : false;

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
            <Route
              path="/"
              // element={isLoggedIn ? <Home /> : <Navigate to="/onBoarding" />}
              element={<Home />}
            />
            <Route path="/category" element={<Category />} />
            <Route
              path="/category/categoryselect"
              element={<CategorySelect selectCategory={selectCategory} />}
            />
            <Route path="/category/:id" element={<CategoryDetail />} />
            <Route path="/myPick" element={<MyPick />} />
            <Route path="/myPick/all" element={<MyPickAll />} />
            <Route path="/myPage" element={<MyPage logData={logData} />} />
            <Route path="/search" element={<SearchResult />} />
          </Routes>
          {location.pathname !== "/onBoarding" && <NavigationBar />}
        </div>
      </div>
    </SearchContext.Provider>
  );
}

export default App;
