import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { SearchContext } from "./context/SearchContext";
import { useState } from "react";

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

function App() {
  const location = useLocation();
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  const [searchKeywold, setSearchKeywold] = useState("");
  const [selectCategory, setSelectCategory] = useState("none");
  console.log(isLoggedIn);
  return (
    <SearchContext.Provider value={{searchKeywold, setSearchKeywold, selectCategory, setSelectCategory}}>
    <div className="App">
      <div className="boardPick">
        <Routes>
          <Route
            path="/onBoarding"
            // element={isLoggedIn ? <Navigate to="/" /> : <OnBoarding />}
            element={<OnBoarding />}
          />
          <Route path="/" element={<Home />} />
          <Route path="/category" element={<Category />} />
          <Route path="/category/categoryselect" element={<CategorySelect selectCategory={selectCategory}/>} />
          <Route path="/category/:id" element={<CategoryDetail />} />
          <Route path="/myPick" element={<MyPick />} />
          <Route path="/myPick/all" element={<MyPickAll />} />
          <Route path="/myPage" element={<MyPage />} />
          <Route path="/search" element={<SearchResult />} />
        </Routes>
        {location.pathname !== "/onBoarding" && <NavigationBar />}
        </div>
      </div>
    </SearchContext.Provider>
  );
}

export default App;
