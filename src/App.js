import {
  Routes,
  Route,
  useLocation,
  Navigate,
  useNavigate,
} from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { SearchContext } from "./context/SearchContext";
import { useState, useEffect } from "react";
import { getLogInfo } from "./common/axios/loginfo";
import {
  profile_brand,
  profile_blue,
  profile_green,
  profile_pink,
  profile_yellow,
} from "../src/assets/image/image";

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
  const [searchKeywold, setSearchKeywold] = useState("");
  // const [selectCategory, setSelectCategory] = useState("none");
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  const dispatch = useDispatch();
  const setIsLoggedIn = (value) => {
    dispatch({ type: "SET_ISLOGGEDIN", payload: value });
  };
  // 최근 검색어 저장
  const loadedRecentKeyword = localStorage.getItem("recentKeyword")
    ? JSON.parse(localStorage.getItem("recentKeyword"))
    : [];
  const [recentKeyword, setRecentKeyword] = useState(
    Array.isArray(loadedRecentKeyword) ? loadedRecentKeyword : []
  );

  // 로그인 api 호출
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [logData, setLogData] = useState([]);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get("token");
    if (token) {
      localStorage.setItem("token", token);
      navigate("/");
    }
    const storeToken = localStorage.getItem("token");
    if (!storeToken) {
      setLoading(false);
      console.error("No token found");
      return;
    }

    const fetchData = async () => {
      try {
        const logData = await getLogInfo(storeToken);
        setLogData(logData);
        setIsLoggedIn(true);
        let profile = localStorage.getItem("profileImage");
        if (!profile) {
          const profileImages = [
            profile_brand,
            profile_pink,
            profile_yellow,
            profile_green,
            profile_blue,
          ];
          const randomIdx = Math.floor(Math.random() * profileImages.length);
          profile = profileImages[randomIdx];
          localStorage.setItem("profileImage", profile);
        }

        setLogData((prevLogData) => ({
          ...prevLogData,
          profileImage:
            logData.profileImage !==
            "http://t1.kakaocdn.net/account_images/default_profile.jpeg.twg.thumb.R640x640"
              ? logData.profileImage
              : profile,
        }));
      } catch (err) {
        setError(err.message);
        setIsLoggedIn(false);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <Loading />;
  }
  return (
    <SearchContext.Provider
      value={{
        searchKeywold,
        setSearchKeywold,
        recentKeyword,
        setRecentKeyword,
      }}
    >
      <div className="App">
        <div className="boardPick">
          <Routes>
            <Route
              path="/onBoarding"
              element={isLoggedIn ? <Navigate to="/" /> : <OnBoarding />}
            />

            <Route
              path="/"
              element={
                isLoggedIn ? (
                  <Home logData={logData} />
                ) : (
                  <Navigate to="/onBoarding" />
                )
              }
            />
            <Route
              path="/category"
              element={
                isLoggedIn ? <Category /> : <Navigate to="/onBoarding" />
              }
            />
            <Route
              path="/category/select/:name"
              element={
                isLoggedIn ? <CategorySelect /> : <Navigate to="/onBoarding" />
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
              path="/search/:name"
              element={
                isLoggedIn ? <SearchResult /> : <Navigate to="/onBoarding" />
              }
            />
          </Routes>
          {location.pathname !== "/onBoarding" && <NavigationBar />}
        </div>
      </div>
    </SearchContext.Provider>
  );
}

export default App;
