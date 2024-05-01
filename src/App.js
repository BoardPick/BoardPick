import { Routes, Route, Navigate } from "react-router-dom";

import "./App.scss";
import OnBoarding from "./pages/OnBoarding/OnBoarding";
import Home from "./pages/Home/Home";
import Category from "./pages/Category/Category";
import Review from "./pages/Review/Review";

import CategoryDetail from "./components/CategoryDetail/CategoryDetail";
import MyPick from "./pages/MyPick/MyPick";
import MyPage from "./pages/MyPage/MyPage";
import TabBar from "./layouts/TabBar/TabBar";

function App() {
  const isLoggedIn = true;
  return (
    <div className="App">
      <Routes>
        <Route
          path="/onBoarding"
          element={isLoggedIn ? <Navigate to="/" /> : <OnBoarding />}
        />
        <Route path="/" element={<Home />} />
        <Route path="/category" element={<Category />} />
        <Route path="/review" element={<Review />} />
        <Route path="/category/:id" element={<CategoryDetail />} />
        <Route path="/myPick" element={<MyPick />} />
        <Route path="/myPage" element={<MyPage />} />
      </Routes>
      <TabBar />
    </div>
  );
}

export default App;
