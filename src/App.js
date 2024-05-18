import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

import "./App.scss";
import OnBoarding from "./pages/OnBoarding/OnBoarding";
import Home from "./pages/Home/Home";
import Category from "./pages/Category/Category";
import CategoryDetail from "./pages/CategoryDetail/CategoryDetail";
import MyPick from "./pages/MyPick/MyPick";
import MyPickAll from "./pages/MyPickAll/MyPickAll";
import MyPage from "./pages/MyPage/MyPage";
import NavigationBar from "./layouts/NavigationBar/NavigationBar";

function App() {
  const location = useLocation();
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  console.log(isLoggedIn);
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
          <Route path="/myPick" element={<MyPick />} />
          <Route path="/myPick/all" element={<MyPickAll />} />
          <Route path="/myPage" element={<MyPage />} />
        </Routes>
        {location.pathname !== "/onBoarding" && <NavigationBar />}
      </div>
    </div>
  );
}

export default App;
