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
import { useSelector, useDispatch } from "react-redux";

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchKeyWord, setSearchKeyWord] = useState("");
  const [selectCategory, setSelectCategory] = useState("none");
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  const dispatch = useDispatch();
  const setIsLoggedIn = () => {
    dispatch({ type: "SET_ISLOGGEDIN", payload: !isLoggedIn });
  };

  // 로그인 api 호출
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [logData, setLogData] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      console.error("No token found");
      return;
    }
    const fetchData = async () => {
      try {
        const logData = await getLogInfo(token);
        setLogData(logData);
        setLoading(false);
        setIsLoggedIn(true);
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

      navigate("/");
    }
  }, []);

  return (
    <SearchContext.Provider
      value={{
        searchKeyWord,
        setSearchKeyWord,
        selectCategory,
        setSelectCategory,
      }}
    >
      {/* <div className="App">
        <div className="boardPick">
          <Routes>
            <Route
              path="/onBoarding"
              element={isLoggedIn ? <Navigate to="/" /> : <OnBoarding />}
            />
            <Route
              path="/"
              element={isLoggedIn ? <Home /> : <Navigate to="/onBoarding" />}
            />
            <Route path="/category" element={<Category />} />
            <Route
              path="/category/categoryselect"
              element={
                isLoggedIn ? (
                  <CategorySelect selectCategory={selectCategory} />
                ) : (
                  <Navigate to="/onBoarding" />
                )
              }
            />
            <Route
              path="/category/categoryselect"
              element={
                isLoggedIn ? (
                  <CategorySelect selectCategory={selectCategory} />
                ) : (
                  <Navigate to="/onBoarding" />
                )
              }
            />
            <Route
              path="/category/:id"
              element={
                isLoggedIn ? <CategoryDetail /> : <Navigate to="/onBoarding" />
              }
            />
            <Route
              path="/myPick"
              element={
                isLoggedIn ? (
                  <MyPick logData={logData} />
                ) : (
                  <Navigate to="/onBoarding" />
                )
              }
            />
            <Route
              path="/myPick/all"
              element={
                isLoggedIn ? <MyPickAll /> : <Navigate to="/onBoarding" />
              }
            />
            <Route
              path="/myPage"
              element={
                isLoggedIn ? (
                  <MyPage logData={logData} />
                ) : (
                  <Navigate to="/onBoarding" />
                )
              }
            />
            <Route
              path="/search"
              element={
                isLoggedIn ? <SearchResult /> : <Navigate to="/onBoarding" />
              }
            />
          </Routes>
          {location.pathname !== "/onBoarding" && <NavigationBar />}
        </div>
      </div> */}
      <div className="App">
        <div className="boardPick">
          <Routes>
            <Route
              path="/onBoarding"
              element={isLoggedIn ? <Navigate to="/" /> : <OnBoarding />}
            />

            <Route path="/" element={<Home />} />
            <Route path="/category" element={<Category />} />
            <Route
              path="/category/categoryselect"
              element={<CategorySelect selectCategory={selectCategory} />}
            />
            <Route path="/category/:id" element={<CategoryDetail />} />
            <Route path="/myPick" element={<MyPick logData={logData} />} />
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
