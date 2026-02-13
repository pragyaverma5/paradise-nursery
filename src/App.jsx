import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import ProductList from "./components/ProductList";
import CartItem from "./components/CartItem";
import AboutUs from "./components/AboutUs";
import "./App.css";

function Landing() {
  const navigate = useNavigate();

  return (
    <div className="landing">
      <div className="overlay">
        <h1>Welcome to Paradise Nursery</h1>
        <p>Where Green Meets Serenity</p>
        <button onClick={() => navigate("/plants")}>
          Get Started
        </button>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/plants" element={<ProductList />} />
        <Route path="/cart" element={<CartItem />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
    </Router>
  );
}

export default App;
