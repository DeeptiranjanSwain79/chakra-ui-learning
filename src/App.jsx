import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import CartPage from "./pages/CartPage";
import Home from "./pages/Home";
import PostPage from "./pages/PostPage";
import Navbar from "./Navigation/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/post" element={<PostPage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
