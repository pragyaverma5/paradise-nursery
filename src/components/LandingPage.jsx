import { useNavigate } from "react-router-dom";
import "./LandingPage.css";

function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="landing">
      <div className="overlay">
        <h1>Welcome To Paradise Nursery</h1>
        <p>Where Green Meets Serenity</p>
        <button onClick={() => navigate("/plants")}>
          Get Started
        </button>
      </div>
    </div>
  );
}

export default LandingPage;
