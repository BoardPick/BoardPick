import { Routes, Route, useLocation, Navigate } from "react-router-dom";

import "./App.scss";
import OnBoarding from "./pages/OnBoarding/OnBoarding";
import Home from "./pages/Home/Home";
import Category from "./pages/Category/Category";
import CategoryDetail from "./pages/CategoryDetail/CategoryDetail";
import MyPick from "./pages/MyPick/MyPick";
import MyPage from "./pages/MyPage/MyPage";
import NavigationBar from "./layouts/NavigationBar/NavigationBar";
import DetailReview from "./pages/DetailReview/DetailReview";

function App() {
  const location = useLocation();
  const isLoggedIn = false;
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
          <Route path="/category/:id" element={<CategoryDetail />} />
          <Route path="/category/:id/review" element={<DetailReview />} />
          <Route path="/myPick" element={<MyPick />} />
          <Route path="/myPage" element={<MyPage />} />
        </Routes>
        {location.pathname !== "/onBoarding" && <NavigationBar />}
      </div>
    </div>
  );
}

export default App;
