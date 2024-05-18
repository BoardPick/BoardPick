import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

import "./App.scss";
import OnBoarding from "./pages/OnBoarding/OnBoarding";
import Home from "./pages/Home/Home";
import Category from "./pages/Category/Category";
import CategorySelect from "./pages/CategorySelect/CategorySelect";
import CategoryDetail from "./pages/CategoryDetail/CategoryDetail";
import MyPick from "./pages/MyPick/MyPick";
import MyPickAll from "./pages/MyPickAll/MyPickAll";
import MyPage from "./pages/MyPage/MyPage";
import NavigationBar from "./layouts/NavigationBar/NavigationBar";
import DetailReview from "./pages/DetailReview/DetailReview";

import MyPageEdit from "./pages/MyPageEdit/MyPageEdit";

function App() {
  const location = useLocation();
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  return (
    <div className="App">
      <div className="boardPick">
        <Routes>
          <Route
            path="/onBoarding"
            element={isLoggedIn ? <Navigate to="/" /> : <OnBoarding />}
          />
          <Route path="/" element={<Home />} />
          <Route path="/category" element={<Category />} />
          <Route path="/category/categoryselect" element={<CategorySelect />} />
          <Route path="/category/:id" element={<CategoryDetail />} />
          <Route path="/category/:id/review" element={<DetailReview />} />
          <Route path="/myPick" element={<MyPick />} />
          <Route path="/myPick/all" element={<MyPickAll />} />
          <Route path="/myPage" element={<MyPage />} />
          <Route path="/myPage/myProfileEdit" element={<MyPageEdit />} />
        </Routes>
        {location.pathname !== "/onBoarding" && <NavigationBar />}
      </div>
    </div>
  );
}

export default App;
