import { Routes, Route } from "react-router-dom";
import "./App.scss";
import Home from "./pages/Home/Home";
import Category from "./pages/Category/Category";
import CategoryDetail from "./components/CategoryDetail/CategoryDetail";
import MyPick from "./pages/MyPick/MyPick";
import MyPage from "./pages/MyPage/MyPage";
import TabBar from "./layouts/TabBar/TabBar";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category" element={<Category />} />
        <Route path="/category/:id" element={<CategoryDetail />} />
        <Route path="/myPick" element={<MyPick />} />
        <Route path="/myPage" element={<MyPage />} />
      </Routes>
      <TabBar />
    </div>
  );
}

export default App;
